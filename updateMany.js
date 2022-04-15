const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/myDB'

MongoClient.connect(url, function (error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connect to', url);
        let dbo = db.db('myDB');
        let myQuery = {address: /^S/};
        let newValues = {$set: {name: "Minnie"}};
        dbo.collection("customers").updateMany(myQuery, newValues, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully updated %d", res.modifiedCount);
                db.close().then(r => console.log('Connection is closed'));
            }
        });
    }
})
