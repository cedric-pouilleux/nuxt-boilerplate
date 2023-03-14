import { router } from '../trpc'
import { fetchPlants, fetchPlant } from '~/server/trpc/routers/plants/read'
import { pushPlant, deletePlant, editPlant } from '~/server/trpc/routers/plants/write'

export const appRouter = router({
  fetchPlants,
  fetchPlant,
  pushPlant,
  deletePlant,
  editPlant
})

export type AppRouter = typeof appRouter;
