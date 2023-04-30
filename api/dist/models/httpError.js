export class HttpError extends Error {
    code;
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode;
    }
}
