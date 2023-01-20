const logger = (req, res, next) => {
    switch (req.method) {
        case 'GET': {
            console.info(`📗 Attempting ${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`📘 Attempting ${req.method} request to ${req.path}`);
            break;
        }
        case 'PULL': {
            console.info(`📙 Attempting ${req.method} request to ${req.path}`);
            break;
        }
        case 'DELETE': {
            console.info(`📕 Attempting ${req.method} request to ${req.path}`);
            break;book
        }
        default:
            console.info(`📚 Attempting ${req.method} request to ${req.path}`)
    };
    next();
}

exports.logger = logger;