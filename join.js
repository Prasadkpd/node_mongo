const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/myDB'

MongoClient.connect(url, function (error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connect to', url);
        let dbo = db.db('myDB');
        dbo.collection("orders").aggregate([
            {$lookup:
                    {
                    from:"products",
                    localField:"product_id",
                    foreignField: "_id",
                    as: "orderDetails"
                    }
            }
    ]).
        toArray(function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(JSON.stringify(res));
                db.close().then(r => console.log('Connection is closed'));
            }
        })

    }
})
