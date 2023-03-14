import { initTRPC } from '@trpc/server'

const t = initTRPC.create()

const isAuthed = t.middleware(({ next }) => {
  return next({
    ctx: {
      session: { email: 'testemail.com' }
    }
  })
})

export const router = t.router
export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(isAuthed)
