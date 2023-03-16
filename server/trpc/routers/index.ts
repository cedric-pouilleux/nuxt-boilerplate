import { router } from '../trpc'
import { fetchPlants, fetchPlant } from '~/server/trpc/routers/plants/read'
import { pushPlant, deletePlant, editPlant } from '~/server/trpc/routers/plants/write'
import { editBreeder, pushBreeder, removeBreeder } from '~/server/trpc/routers/breeders/write'
import { fetchBreeders } from '~/server/trpc/routers/breeders/read'
import { pushGenetic } from '~/server/trpc/routers/genetics/write'
import { fetchGenetics } from '~/server/trpc/routers/genetics/read'

export const appRouter = router({
  fetchPlants,
  fetchPlant,
  pushPlant,
  deletePlant,
  editPlant,
  fetchBreeders,
  pushBreeder,
  pushGenetic,
  fetchGenetics,
  editBreeder,
  removeBreeder
})

export type AppRouter = typeof appRouter;
