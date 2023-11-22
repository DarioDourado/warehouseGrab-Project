import { ProductsRepository } from '@/repositories/product-repository'
import { Product } from '@prisma/client'
import { ResourceNotFoundError } from './errors/recource-not-found-error'



interface GetProductsByUseCaseRequest {
  productId: string
  id: string
}

interface GetProductsByUseCaseResponse {
  product: Product
}

export class GetProductsByUseCase {
  constructor(private productRepository: ProductsRepository) {}

  async execute({
    productId,
  }: GetProductsByUseCaseRequest) : Promise <GetProductsByUseCaseResponse> {
    const product = await this.productRepository.getProductsById(productId)

    if (!product) {
      throw new ResourceNotFoundError()
    }

    return {
        product,
    }
  }
}

