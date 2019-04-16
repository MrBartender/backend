const AWS = require('aws-sdk');

export const get = (_event: any, _context: any, cb) => {
  var db = new AWS.DynamoDB.DocumentClient();
  var params = {
    TableName : 'orders',
  };
  var objs : any;
  console.log(objs);
  db.scan(params, function(err, data) {
    if (err) console.log(err);
    else objs = data;
  });
  const response = {
    statusCode: 201,
    objs,
  };

  cb(null, response);
}
