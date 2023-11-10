export class LocalStorageNameError extends Error {
    constructor() {
        super('This Local Storage Name already exists, please choose another Local Storage Name.');
    }
}
