export const AUTHENTICATION_ERROR_MESSAGE =
    'You must be authenticated to access this resource.';

export const AuthenticationError = class AuthenticationError extends Error {
    constructor() {
        super(AUTHENTICATION_ERROR_MESSAGE);
        this.name = 'AuthenticationError';
    }
};
