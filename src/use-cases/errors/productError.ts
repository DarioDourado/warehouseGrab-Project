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