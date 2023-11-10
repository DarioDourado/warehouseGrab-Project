export class TaxNameError extends Error {
    constructor() {
        super('This Tax Name already exists, please choose another Tax Name.');
    }
}
