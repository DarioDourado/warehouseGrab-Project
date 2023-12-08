import { Prisma, StorageLocation } from "@prisma/client";

export interface StorageLocationRepository {
    findLocalStorageByName(name: string): Promise<StorageLocation| null>
    findLocalStorageById(id: string): Promise<StorageLocation| null>
    createLocalStorages (data: Prisma.StorageLocationCreateInput): Promise<StorageLocation>
}