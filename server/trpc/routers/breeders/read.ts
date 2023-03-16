import { prisma } from '@/server/utils/prisma'
import { publicProcedure } from '~/server/trpc/trpc'

const fetchBreeders = publicProcedure
  .query(() => {
    return prisma.breeder.findMany({
      orderBy: {
        updatedAt: 'desc'
      }
    })
  })

export {
  fetchBreeders
}
