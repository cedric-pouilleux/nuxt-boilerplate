import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import { Context } from './context'

const instance = initTRPC.context<Context>().create({
  transformer: superjson
})

const isAuthed = instance.middleware(({ next }) => {
  return next({
    ctx: {
      session: { email: 'testemail.com' }
    }
  })
})

export const router = instance.router
export const publicProcedure = instance.procedure
export const protectedProcedure = instance.procedure.use(isAuthed)
