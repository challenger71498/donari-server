class BaseException extends Error {
    public status: number;
    public code: string;

    public constructor(status: number, code: string, message: string) {
        super(message);

        this.status = status;
        this.code = code;
    }

    public toJSON() {
        return {
            code: this.code,
            message: this.message,
        };
    }
}


export default BaseException;
