
import { PrismaStockControlRepository } from "@/repositories/prisma/prisma-stock-control-repository";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getQtResumeStockController(request: FastifyRequest, reply: FastifyReply) {
    
    
    
    const stockControlRepository = new PrismaStockControlRepository

    try {
        const getQtResumeStock = await stockControlRepository.resumoQuantidadePorProduto()
        

        // // Extrair valores do objeto
        // const upc = sumQuantity.;
        // const name = objeto.name;
        // const description = objeto.description;

        // // Calcular a soma de StockControl.quantity
        const somaQuantidade = await getQtResumeStock.map(object => object)

        console.log(somaQuantidade);
        //console.log(soma);
        // return total + stockControl.quantity;
        // }, 0);

        // // Criar o mapa
        // const mapa = new Map();
        // mapa.set("UPC", upc);
        // mapa.set("NAME", name);
        // mapa.set("DESCRIPTION", description);
        // mapa.set("SUM_QUANTITY", somaQuantidade);

        // // Exibir o mapa
        // console.log(mapa);

        reply.status(200).send(getQtResumeStock);
    } catch (error) {
        reply.status(409).send('Não foi possivel encontrar qualquer stock');
    }
}