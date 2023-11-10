export class SupplierNameError extends Error {
    constructor() {
        super('This Supplier Name already exists, please choose another Supplier Name.');
    }
}
