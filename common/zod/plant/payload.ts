import { z } from 'zod'

const PlantSchema = z.object({
  id: z.number()
})

type Plant = z.infer<typeof PlantSchema>;

export {
  PlantSchema,
  Plant
}
