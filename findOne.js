const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/myDB'

MongoClient.connect(url, function (error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connect to', url);
        let dbo = db.db('myDB');
        dbo.collection("customers").findOne({}, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
                db.close().then(console.log('Connection is closed'));
            }
        })

    }
})
