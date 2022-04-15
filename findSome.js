const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/myDB'

MongoClient.connect(url, function (error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connect to', url);
        let dbo = db.db('myDB');
        //to exclude address make 1 to 0
        //get an error if you specify both 0 and 1 values in the same object (except if one of the fields is the _id field
        dbo.collection("customers").find({}, {projection: {_id: 0, name: 1}}).toArray(function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
                db.close().then(r => console.log('Connection is closed'));
            }
        })

    }
})
