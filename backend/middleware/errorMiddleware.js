// notFound - this is will be called when no other middleware has handled a request
//            and it will create a new Error object and set the status code to 404
//            which is not found error

const notFound = (req,res,next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

//to overwrite the default express error handler we are going to create a function
//called errorHandler

const errorHandler = (err,req,res,next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    //check for Mongoose bad ObjectId / Cast Error
    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        message = 'Resource not Found';
        statusCode = 404;
    }
    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? 'pancake' : err.stack,
    })
}

export {notFound, errorHandler};

//To use them, we need to go to server.js
