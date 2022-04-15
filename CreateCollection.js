const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/fruits'

MongoClient.connect(url, function (error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connect to', url);
        let dbo = db.db('fruits');
        dbo.createCollection("orange", function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close().then(r => console.log('Connection is closed'));
        });
    }
})
