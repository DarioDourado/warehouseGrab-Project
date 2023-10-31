export class UserTesteAlreadyExistsError extends Error {
    constructor() {
        super('Email already exists');
    }
}