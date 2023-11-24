import { FastifyInstance } from "fastify";
import { addStock } from "./add-stock-controller";
import { editStockController } from "./edit-stock-controller";
import { getAllStockController } from "./get-all-stock-controller";
import { removeStockController } from "./remove-stock-conttroller";

export async function stockControlRoutes(app: FastifyInstance) {

    app.post('/addStock', addStock)

    app.delete('/removestock/:id', removeStockController)

    app.put('/edit-stock/:id', editStockController)

    app.get('/getall-stock', getAllStockController)



        
        

}


