import "source-map-support/register";
import { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const queries = JSON.stringify(event.queryStringParameters);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Go Serverless Webpack (Typescript) v1.0! Your function executed successfully! ${queries}`,
        input1: event,
        query: event.queryStringParameters,
      },
      null,
      2
    ),
  };
};
