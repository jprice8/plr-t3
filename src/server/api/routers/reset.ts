import { createTRPCRouter, protectedProcedure } from "../trpc";

import { getWeekData } from "../services/resetServices";

export const resetRouter = createTRPCRouter({
  getResetWeeksListData: protectedProcedure.query(() => {
    const weeks = getWeekData()
    return weeks.reverse()
  })
})