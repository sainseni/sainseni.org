type StatusCodesType = {
    [key: string]: number;
};

type ReasonPhrasesType = {
    [key: number]: string;
};

export const STATUS_CODES: StatusCodesType = {
    OK: 200,
    CREATED: 201,
    REDIRECT: 302,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
};

export const REASON_PHRASES: ReasonPhrasesType = {
    200: 'OK',
    201: 'Created',
    302: 'Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
};
