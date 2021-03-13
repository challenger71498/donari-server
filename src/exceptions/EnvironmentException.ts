class EnvironmentException extends Error {
    constructor(name: string) {
        super(`Environment variable '${name}' is not valid.`);
    }
}

export default EnvironmentException;
