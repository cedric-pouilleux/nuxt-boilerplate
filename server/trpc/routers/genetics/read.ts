import { prisma } from '@/server/utils/prisma'
import { publicProcedure } from '~/server/trpc/trpc'

const fetchGenetics = publicProcedure
  .query(() => {
    return prisma.genetic.findMany()
  })

export {
  fetchGenetics
}
