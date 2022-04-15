const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/myDB'

MongoClient.connect(url, function (error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connect to', url);
        let dbo = db.db('myDB');
        let myObj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("customers").insertOne(myObj, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log("1 document inserted");
                db.close().then(r => console.log('Connection is closed'));
            }
        })

    }
})
