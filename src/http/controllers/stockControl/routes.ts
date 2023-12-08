import { FastifyInstance } from "fastify";
import { addStock } from "./add-stock-controller";
import { getQtGroupByStockController } from "./count-resume-stock-controllers";
import { editStockController } from "./edit-stock-controller";
import { getAllStockController } from "./get-all-stock-controller";
import { getStockRegisterByIdController } from "./get-by-id-inventary-register-controller";
import { getQtResumeStockController } from "./group-By-resume-stock-controllers";
import { removeStockController } from "./remove-stock-conttroller";

export async function stockControlRoutes(app: FastifyInstance) {

    app.post('/inventaryregister', addStock)

    app.delete('/remove-inventoryregist/:id', removeStockController)

    app.put('/edit-inventoryregister/:id', editStockController)

    app.get('/getall-inventory', getAllStockController)
    app.get('/get-inventory', getQtResumeStockController)
    app.get('/get-inventory-resume', getQtGroupByStockController)
    app.get('/get-by-id-inventoryregister', getStockRegisterByIdController)

}


