import { string, z } from 'zod'
import { publicProcedure } from '~/server/trpc/trpc'
import { prisma } from '~/server/utils/prisma'

const pushGenetic = publicProcedure
  .input(
    z.object({
      name: string()
    })
  )
  .mutation((req) => {
    return prisma.genetic.create({
      data: req.input
    })
  })

export {
  pushGenetic
}
