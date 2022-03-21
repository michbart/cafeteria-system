import { Response } from 'express';
import { environment } from '../config';
import {
    AuthFailureResponse,
    InternalErrorResponse,
    NotFoundResponse,
    BadRequestResponse,
    ForbiddenResponse
} from './api-response';

enum ErrorType {
    UNAUTHORIZED = 'AuthFailureError',
    INTERNAL = 'InternalError',
    NOT_FOUND = 'NotFoundError',
    NO_ENTRY = 'NoEntryError',
    NO_DATA = 'NoDataError',
    BAD_REQUEST = 'BadRequestError',
    FORBIDDEN = 'ForbiddenError'
}

export abstract class ApiError extends Error {

    constructor(public type: ErrorType, public message: string = 'error') {
        super(type);
    }

    public static handle(err: ApiError, res: Response): Response {
        switch (err.type) {
            case ErrorType.UNAUTHORIZED:
                return new AuthFailureResponse(err.message).send(res);
            case ErrorType.INTERNAL:
                return new InternalErrorResponse(err.message).send(res);
            case ErrorType.NOT_FOUND:
            case ErrorType.NO_ENTRY:
            case ErrorType.NO_DATA:
                return new NotFoundResponse(err.message).send(res);
            case ErrorType.BAD_REQUEST:
                return new BadRequestResponse(err.message).send(res);
            case ErrorType.FORBIDDEN:
                return new ForbiddenResponse(err.message).send(res);
            default: {
                let message = err.message;
                // Do not send failure message in production as it may send sensitive data
                if (environment === 'production') message = 'Something wrong happened.';
                return new InternalErrorResponse(message).send(res);
            }
        }
    }
}

export class AuthFailureError extends ApiError {
    constructor(message: string = 'Invalid Credentials') {
        super(ErrorType.UNAUTHORIZED, message);
    }
}

export class InternalError extends ApiError {
    constructor(message: string = 'Internal error') {
        super(ErrorType.INTERNAL, message);
    }
}

export class BadRequestError extends ApiError {
    constructor(message: string = 'Bad Request') {
        super(ErrorType.BAD_REQUEST, message);
    }
}

export class NotFoundError extends ApiError {
    constructor(message: string = 'Not Found') {
        super(ErrorType.NOT_FOUND, message);
    }
}

export class ForbiddenError extends ApiError {
    constructor(message: string = 'Permission denied') {
        super(ErrorType.FORBIDDEN, message);
    }
}

export class NoEntryError extends ApiError {
    constructor(message: string = "Entry don't exists") {
        super(ErrorType.NO_ENTRY, message);
    }
}

export class NoDataError extends ApiError {
    constructor(message: string = 'No data available') {
        super(ErrorType.NO_DATA, message);
    }
}
