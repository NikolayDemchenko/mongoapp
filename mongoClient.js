const { MongoClient } = require("mongodb");

// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true });

mongoClient.connect(function (err, client) {

    const db = client.db("usersdb");
    const collection = db.collection("users");

    // collection.updateOne({name : "papik"}, {$pull:  { children: [ "Протеинка", "Процентик" ] }})
    
    collection.updateOne({ name: "papik" }, {
        $push: { children: ["Протffеинка", "Процентик"] }
    });

    // let user = {name: "papik", age: 999};
    // user.children = [{ name: 'Matt' }, { name: 'Sarah' }];

    // collection.insertOne(user, function (err, result) {

    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(result.ops);
    // });
    client.close();
});