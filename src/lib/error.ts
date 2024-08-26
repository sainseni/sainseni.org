export const AUTHENTICATION_ERROR_MESSAGE =
    'You must be authenticated to access this resource.';

export const AUTHORIZATION_ERROR_MESSAGE =
    'You are not authorized to access this resource.';

export const AuthenticationError = class AuthenticationError extends Error {
    constructor() {
        super(AUTHENTICATION_ERROR_MESSAGE);
        this.name = 'AuthenticationError';
    }
};

export const AuthorizationError = class AuthorizationError extends Error {
    constructor() {
        super(AUTHORIZATION_ERROR_MESSAGE);
        this.name = 'AuthorizationError';
    }
};

export function getStatusCode(error: Error) {
    if (
        error instanceof AuthenticationError ||
        error.message === AUTHENTICATION_ERROR_MESSAGE
    ) {
        return 401;
    }
    if (
        error instanceof AuthorizationError ||
        error.message === AUTHORIZATION_ERROR_MESSAGE
    ) {
        return 403;
    }
    return 500;
}
