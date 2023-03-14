import { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'
import { prisma } from '~/server/utils/prisma'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
function createContext (_event: H3Event) {
  const { req, res } = _event
  return {
    req,
    res,
    prisma
  }
}

export type Context = inferAsyncReturnType<typeof createContext>;
