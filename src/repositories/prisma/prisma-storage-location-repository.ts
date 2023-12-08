import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { StorageLocationRepository } from "../storage-location-repository";




export class PrismaStorageLocationRepository implements StorageLocationRepository {

    async findLocalStorageByName(name: string) {
        const storageLocation = await prisma.storageLocation.findUnique({
            where:{
                name
            }
        })

        return storageLocation
    }

    async findLocalStorageById(id: string) {
        const storageLocation = await prisma.storageLocation.findFirst({
            where:{
                id
            }
        })

        return storageLocation
    }

    async getAllLocalStorage() {
        const storageLocation = await prisma.storageLocation.findMany();
        return storageLocation;
    }

    async createLocalStorages (data: Prisma.StorageLocationCreateInput) {
        const storageLocation = await prisma.storageLocation.create( {data} )
        return storageLocation
    }
}