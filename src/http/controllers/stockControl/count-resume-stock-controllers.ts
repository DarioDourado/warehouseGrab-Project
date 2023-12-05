import { PrismaStockControlRepository } from "@/repositories/prisma/prisma-stock-control-repository";
import { FastifyReply, FastifyRequest } from "fastify";

export interface StockResumeGroupedRepository {
    product: {
        upc: string;
        name: string;
        description: string;
        stockRecQt: number | null;
        alert1: number | null;
        alert2: number | null;
    };
    storageLocations: string[];
    totalQuantity: number;
    status: string;
}

export async function getQtGroupByStockController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const stockControlRepository = new PrismaStockControlRepository();

    try {
        const stockCountControl = await stockControlRepository.getStockResume();

        const resume: Record<string, StockResumeGroupedRepository> = {};

        stockCountControl.forEach((item) => {
            const { upc, stockRecQt, alert1, alert2 } = item.product;

            if (!resume[upc]) {
                resume[upc] = {
                    product: item.product,
                    storageLocations: [item.storageLocation.name],
                    totalQuantity: item.quantity,
                    status: '',
                };
            } else {
                resume[upc].totalQuantity += item.quantity;
            }

            // Update status based on quantity
            resume[upc].status = getStatus(
                resume[upc].totalQuantity,
                alert1,
                alert2,
                stockRecQt
            );
        });

        reply.status(201).send(resume);

    } catch (error) {
        reply.status(409).send("Não foi possível encontrar qualquer stock");
    }
}

function getStatus(
    quantity: number,
    alert1: number | null,
    alert2: number | null,
    stockRecQt: number | null
): string {
    if (quantity < (alert2 ?? Infinity)) {
        return 'Alerta 2';
    } else if (quantity <= (alert1 ?? Infinity) && quantity > (alert2 ?? -Infinity)) {
        return 'Alerta 1';
    } else if (quantity >= (stockRecQt ?? -Infinity)) {
        return 'OK';
    } else {
        return 'STATUS: Unknown';
    }
}
