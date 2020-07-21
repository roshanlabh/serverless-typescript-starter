"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
require("source-map-support/register");
exports.handler = async (event, _context) => {
    const queries = JSON.stringify(event.queryStringParameters);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Go Serverless Webpack (Typescript) v1.0! Your function executed successfully! ${queries}`,
            input1: event,
            query: event.queryStringParameters,
        }, null, 2),
    };
};
//# sourceMappingURL=hello.js.map