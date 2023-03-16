import { z } from 'zod'

const BreederSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
})

type Breeder = z.infer<typeof BreederSchema>;

export {
  BreederSchema,
  Breeder
}
