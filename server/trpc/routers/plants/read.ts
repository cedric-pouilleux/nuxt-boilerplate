import { z } from 'zod'
import { publicProcedure } from '~/server/trpc/trpc'

const fetchPlants = publicProcedure
  .query(() => {
    return [
      { a: 'a' },
      { b: 'b' }
    ]
  })

const fetchPlant = publicProcedure
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
  })

export {
  fetchPlant,
  fetchPlants
}
