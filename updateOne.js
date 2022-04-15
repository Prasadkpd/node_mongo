const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/myDB'

MongoClient.connect(url, function (error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connect to', url);
        let dbo = db.db('myDB');
        let myQuery = {address: "Valley 345"};
        let newValues = {$set: {name: "Mickey", address: "Canyon 123"}};
        //To update specific field
        // var myquery = { address: "Valley 345" };
        // var newvalues = { $set: { address: "Canyon 123" } };
        dbo.collection("customers").updateOne(myQuery, newValues, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully updated");
                db.close().then(r => console.log('Connection is closed'));
            }
        });
    }
})
