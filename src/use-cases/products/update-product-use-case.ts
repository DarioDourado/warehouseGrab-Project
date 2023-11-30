import { prisma } from "@/lib/prisma";
import { ProductsUpdateRepository } from "@/repositories/product-update-repository";
import { ProductUseCase } from "./add-product-use-case";

interface ProductUpdateUseCaseRequest {
    id: string;
    upc: string;
    sku: string;
    name: string;
    description: string;
    price: number;
    tax: string;
    photo: string;
    isPack: boolean;
    packUnQt: number;
    expirationDate?: string;
    productCategory?: string;
    stockRecQt?: number;
    alert1?: number;
    alert2?: number;
}

export class ProductUpdateUseCase {
    // Inject repositories or use case classes through the constructor
    constructor(
        private productsUpdateRepository: ProductsUpdateRepository,
        private productUseCase: ProductUseCase
    ) {}

    async execute({
        id,
        upc,
        sku,
        name,
        description,
        price,
        tax,
        photo,
        isPack,
        packUnQt,
        expirationDate,
        productCategory,
        stockRecQt,
        alert1,
        alert2,
    }: ProductUpdateUseCaseRequest) {
        // Retrieve the existing product
        const productToUpdate = await this.productsUpdateRepository.getProductsUpdateById(id);

        // Destructure the existing product attributes
        // const {
        //     id: currentId,
        //     sku: currentSku,
        //     upc: currentUpc,
        //     name: currentName,
        //     description: currentDescription,
        //     price: currentPrice,
        //     tax: currentTax,
        //     photo: currentPhoto,
        //     isPack: currentIsPack,
        //     packUnQt: currentPackUnQt,
        //     expirationDate: currentExpirationDate,
        //     productCategory: currentProductCategory,
        //     stockRecQt: currentStockRecQt,
        //     alert1: currentAlert1,
        //     alert2: currentAlert2,
        // } = productToUpdate;

        // Define new values or use existing values if not provided
        const newid = id 
        const newSku = sku
        const newUpc = upc 
        const newName = name 
        const newDescription = description
        const newPrice = price
        const newTax = tax
        const newPhoto = photo
        const newIsPack = isPack
        const newPackUnQt = packUnQt
        const newExpirationDate = expirationDate
        const newProductCategory = productCategory
        const newStockRecQt = stockRecQt
        const newAlert1 = alert1
        const newAlert2 = alert2

        // Update the product in the database
        await prisma.product.update({
            where: { id },
            data: {
                upc: newUpc,
                sku: newSku,
                name: newName,
                description: newDescription,
                price: newPrice,
                tax: {
                    connect: {
                        taxValue: newTax
                    }
                },
                photo: newPhoto,
                isPack: newIsPack,
                packUnQt: newPackUnQt,
                expirationDate: newExpirationDate,
                productCategory: {
                    connect: {
                        productCategory: newProductCategory,
                    },
                },
                stockRecQt: newStockRecQt,
                alert1: newAlert1,
                alert2: newAlert2,
            },
        });

        // If needed, call the add product use case to handle related logic
        await this.productUseCase.execute({

            upc,
            sku,
            name,
            description,
            price,
            tax,
            photo,
            isPack,
            packUnQt,
            expirationDate,
            productCategory,
            stockRecQt,
            alert1,
            alert2
        });
    }
}
