const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/myDB'

MongoClient.connect(url, function (error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connect to', url);
        let dbo = db.db('myDB');
        let myQuery = {address: /^O/};
        dbo.collection("customers").deleteMany(myQuery, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log("%d Deleted Successfully", res.deletedCount);
                db.close().then(r => console.log('Connection is closed'));
            }
        })

    }
})
