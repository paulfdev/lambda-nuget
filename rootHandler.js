'use strict';

module.exports.Root = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: '<?xml version="1.0" encoding="utf-8" standalone="yes"?><service xml:base="https://0w2ziyphdf.execute-api.eu-west-1.amazonaws.com/dev/api/v2/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:app="http://www.w3.org/2007/app" xmlns="http://www.w3.org/2007/app"><workspace><atom:title>Default</atom:title><collection href="Packages">  <atom:title>Packages</atom:title></collection></workspace></service>'
  };

  console.log(response.body);
  console.log(JSON.stringify({
      evt : event,
      ctx : context,
      callbk : callback
    }));
  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.Metadata = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'METADATA'
  };

  console.log(response.body);
  console.log(JSON.stringify({
      evt : event,
      ctx : context,
      callbk : callback
    }));
  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};