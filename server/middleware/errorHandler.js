const errorHandler = (err) => {
    return res.status(400).send({
        message: `${err.message}`,
        type: "ERROR"
    });
}

module.exports = {
    errorHandler
}