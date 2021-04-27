const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
  region: "us-east-1"
});

console.log("Writing entries to Accessibilities table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const accessibilitiesData =
  JSON.parse(fs.readFileSync('../components/data/amenities.json', 'utf8'));

accessibilitiesData.forEach(function (accessibililty) {
  const params = {
    TableName: "Accessibilities",
    Item: {
      "name": accessibililty.name
    }
  };

  dynamodb.put(params, function (err, data) {
    if (err)
      console.error("Unable to load data into table for accessibility",
        accessibililty.name, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", accessibililty.name, "to table.")
  })
});
