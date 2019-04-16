const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
  const eventData = JSON.parse(event.body);
  const pathData = JSON.parse(event.pathParameters)
  const id = pathData.id;
  console.log(id);
  console.log("FOX")
  console.log(eventData);
  var params = {
    TableName : 'recipes',
  };
  dynamoDB.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error)
      callback(new Error('INTERNAL'))
      return
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result)
    }
    callback(null, response)
  })
}