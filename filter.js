const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/myDB'

MongoClient.connect(url, function (error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connect to', url);
        let dbo = db.db('myDB');
        let query = {address: "Park Lane 38"}
        dbo.collection("customers").find(query).toArray( function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
                db.close().then(r => console.log('Connection is closed'));
            }
        })

    }
})
