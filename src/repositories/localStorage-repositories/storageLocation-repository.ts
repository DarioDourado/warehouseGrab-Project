
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { StorageLocationRepository } from "../prisma/storage/prisma-storageLocation-repository";





export class PrismaStorageLocationRepository implements StorageLocationRepository {

    async findLocalStorageByName(name: string) {
        const localStorage = await prisma.storageLocation.findUnique({
            where:{
                name
            }
        })

        return localStorage
    }


    async createLocalStorages (data: Prisma.StorageLocationCreateInput) {
        const localStorage = await prisma.storageLocation.create( {data} )

        return localStorage

    }
}