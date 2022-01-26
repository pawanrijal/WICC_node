const successMessage = require("./messages");
const util = require("util");

const SuccessResponse = (res, status, success, data, message, source) => {
    
        const response = {};
        response.status = status;
        response.data = data;
        response.success = success;
        response.message =
            source ? util.format(successMessage.create, source): successMessage[message];
        return res.status(status).json(response);
    
};

module.exports = SuccessResponse;
