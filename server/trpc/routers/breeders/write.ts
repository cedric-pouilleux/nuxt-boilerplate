import { string, number, z } from 'zod'
import { prisma } from '@/server/utils/prisma'
import { publicProcedure } from '~/server/trpc/trpc'

const pushBreeder = publicProcedure
  .input(
    z.object({
      name: string()
    })
  )
  .mutation((req) => {
    return prisma.breeder.create({
      data: req.input
    })
  })

const editBreeder = publicProcedure
  .input(
    z.object({
      id: number().optional(),
      name: string().optional()
    })
  )
  .mutation((req) => {
    return prisma.breeder.update({
      where: {
        id: req.input.id
      },
      data: req.input
    })
  })

const removeBreeder = publicProcedure
  .input(
    z.object({
      id: number().optional()
    })
  )
  .mutation((req) => {
    return prisma.breeder.delete({
      where: {
        id: req.input.id
      }
    })
  })

export {
  pushBreeder,
  editBreeder,
  removeBreeder
}
