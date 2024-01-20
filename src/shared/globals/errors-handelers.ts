import HTTP_STATUS_CODE from "http-status-codes";

export interface ErrorResponse {
    message: string;
    statusCode: number;
    status: string;
    serializeErrors(): IErrors;
}

export interface IErrors{
    message: string;
    statusCode: number;
    status: string;
}

export abstract class CustomError extends Error{
    abstract statusCode: number;
    abstract status: string;
    constructor(message:string){
        super(message)
    }

    serializeErrors(): IErrors {
        return {
            status: this.status,
            statusCode: this.statusCode,
            message: this.message
        }
    }
}

export class JoiRequestValidation extends CustomError{
    statusCode = HTTP_STATUS_CODE.BAD_REQUEST;
    status = "error";
    constructor(message: string){
        super(message)
    }
}

export class BadRequestError extends CustomError{
    statusCode = HTTP_STATUS_CODE.BAD_REQUEST;
    status = "error";
    constructor(message: string){
        super(message)
    }
}

export class NotFoundError extends CustomError{
    statusCode = HTTP_STATUS_CODE.NOT_FOUND;
    status = "error";
    constructor(message: string){
        super(message)
    }
}

export class UnAuthorizedError extends CustomError{
    statusCode = HTTP_STATUS_CODE.UNAUTHORIZED;
    status = "error";
    constructor(message: string){
        super(message)
    }
}

export class FileTooLargeError extends CustomError{
    statusCode = HTTP_STATUS_CODE.REQUEST_TOO_LONG;
    status = "error";
    constructor(message: string){
        super(message)
    }
}

export class ServerError extends CustomError{
    statusCode = HTTP_STATUS_CODE.SERVICE_UNAVAILABLE;
    status = "error";
    constructor(message: string){
        super(message)
    }
}