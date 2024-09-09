class Response {
    constructor() { };

    static successResponse(data, code = 200) {
        return {
            code,
            data
        }
    }
    static erorrResponse(code, err) {
        return {
            code,
            error: {
                message: err.message,
                description: err.description
            }
        }
    }
}

export default Response