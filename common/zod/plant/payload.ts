import { z } from 'zod'

const PlantSchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
})

type Plant = z.infer<typeof PlantSchema>;

export {
  PlantSchema,
  Plant
}
