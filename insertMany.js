const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/myDB'

MongoClient.connect(url, function (error, db) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connect to', url);
        let dbo = db.db('myDB');
        let myObj = [
            {name: 'John', address: 'Highway 71'},
            {name: 'Peter', address: 'Lowstreet 4'},
            {name: 'Amy', address: 'Apple st 652'},
            {name: 'Hannah', address: 'Mountain 21'},
            {name: 'Michael', address: 'Valley 345'},
            {name: 'Sandy', address: 'Ocean blvd 2'},
            {name: 'Betty', address: 'Green Grass 1'},
            {name: 'Richard', address: 'Sky st 331'},
            {name: 'Susan', address: 'One way 98'},
            {name: 'Vicky', address: 'Yellow Garden 2'},
            {name: 'Ben', address: 'Park Lane 38'},
            {name: 'William', address: 'Central st 954'},
            {name: 'Chuck', address: 'Main Road 989'},
            {name: 'Viola', address: 'Sideway 1633'}
        ];
        dbo.collection("customers").insertMany(myObj, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log("Inserted %d Documents", res.insertedCount);
                db.close().then(r => console.log('Connection is closed'));
            }
        })

    }
})
