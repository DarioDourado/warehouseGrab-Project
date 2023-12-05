import { FastifyInstance } from "fastify";
import { addStock } from "./add-stock-controller";
import { getQtGroupByStockController } from "./count-resume-stock-controllers";
import { editStockController } from "./edit-stock-controller";
import { getAllStockController } from "./get-all-stock-controller";
import { getQtResumeStockController } from "./group-By-resume-stock-controllers";
import { removeStockController } from "./remove-stock-conttroller";

export async function stockControlRoutes(app: FastifyInstance) {

    app.post('/addStock', addStock)

    app.delete('/removestock/:id', removeStockController)

    app.put('/edit-stock/:id', editStockController)

    app.get('/getall-stock', getAllStockController)
    app.get('/get-stock', getQtResumeStockController)
    app.get('/get-stock-goup-by', getQtGroupByStockController)



        
        

}


