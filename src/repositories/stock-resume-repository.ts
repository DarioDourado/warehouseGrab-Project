import { Prisma, StockControl } from "@prisma/client";

export interface StockResumeRepository {

    stockResume (data: Prisma.StockControlCreateInput): Promise<StockControl>
}