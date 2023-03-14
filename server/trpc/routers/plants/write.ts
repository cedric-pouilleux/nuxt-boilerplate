import { z } from 'zod'
import { protectedProcedure } from '~/server/trpc/trpc'

const pushPlant = protectedProcedure
  .input(
    z.object({
      id: z.string()
    })
  )
  .mutation((req) => {
    const plant = {
      id: req.input.id
    }
    return plant
  })

const editPlant = protectedProcedure
  .input(
    z.object({
      id: z.string()
    })
  )
  .mutation((req) => {
    const plant = {
      id: req.input.id
    }
    return plant
  })

const deletePlant = protectedProcedure
  .input(
    z.object({
      id: z.string()
    })
  )
  .mutation((req) => {
    const plant = {
      id: req.input.id
    }
    return plant
  })

export {
  pushPlant,
  deletePlant,
  editPlant
}
