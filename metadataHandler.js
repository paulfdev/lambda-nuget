
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