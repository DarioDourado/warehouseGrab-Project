export class UPCAlreadyExistsError extends Error {
    constructor() {
        super('UPC already exists, please check your product UPC');
    }
}

export class SKUAlreadyExistsError extends Error {
    constructor() {
        super('SKU already exists, please check your product SKU');
    }
}

export class ProductCategoryAlreadyExistsError extends Error {
    constructor() {
        super('This product category alreacy exists, please check your product category name.');
    }
}

export class TaxValueAlreadyExistsError extends Error {
    constructor() {
        super('The Tax Value already exists, please check and introduce a diferente');
    }
}