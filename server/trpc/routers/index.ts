import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const appRouter = router({
  getPlant: publicProcedure
    .input(
      z.object({
        id: z.number()
      })
    )
    .query(({ input }) => {
      const id = input?.id

      const plants = [
        {
          id: 1,
          title: 'Harry Potter'
        },
        {
          id: 2,
          title: 'Lord of The Rings'
        }
      ]

      return plants.find((plant) => {
        return plant.id === id
      })
    }),

  addPlant: publicProcedure
    .input(
      z.object({
        title: z.string()
      })
    )
    .mutation((req) => {
      const plant = {
        title: req.input.title
      }
      return plant
    })
})

export type AppRouter = typeof appRouter;
