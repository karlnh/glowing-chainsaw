const logger = (req, res, next) => {
    switch (req.method) {
        case 'GET': {
            console.info(`📗 ${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`📘 ${req.method} request to ${req.path}`);
            break;
        }
        case 'PULL': {
            console.info(`📙 ${req.method} request to ${req.path}`);
            break;
        }
        case 'DELETE': {
            console.info(`📕 ${req.method} request to ${req.path}`);
            break;book
        }
        default:
            console.info(`📚 ${req.method} request to ${req.path}`)
    }

    next();
}

exports.logger = logger;