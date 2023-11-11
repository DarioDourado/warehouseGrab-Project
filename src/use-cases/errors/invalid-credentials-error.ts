export class InvalidCredentialsError extends Error {
    constructor() {
        super('Youd passwor or your email do not match.');
    }
}