import { z } from 'zod'

const Plant = z.object({
  id: z.number(),
  cre: z.number()
})

type PlantPayloadType = z.infer<typeof Plant>;

export {
  Plant,
  PlantPayloadType
}
