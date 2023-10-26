
// definir dados types
interface productUseCaseRequest {
    upc: string
    sku: string
    name: string
    description: string
    price: number
    tax: number
    photo: string
    packOrUn: string
    packUnQt: number
    productCategory: string
    expirationDate: string
    stockRecQt: number
    alert1: number
    alert2: number
}

export async function productUseCase({
   upc,
   sku,
   name,
   description,
   price,
   tax,
   photo,
   packOrUn,
   packUnQt,
   expirationDate,
   productCategory,
   alert1,
   alert2,
}: productUseCaseRequest) {


}