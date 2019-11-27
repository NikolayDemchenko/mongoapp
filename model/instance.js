const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
var dbURI = "mongodb://localhost:27017/testdb";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

const InstanceScheme = new mongoose.Schema({
    templateId: ObjectId,
    price:Number,
    priceUnit:ObjectId,
    quantity:Number,
    quantityUnit:ObjectId,
    delivery:[ObjectId],
    payment:[ObjectId],
    location:Object,
    specsSheets: [
        {
            _id:ObjectId,
            specs: [
                {
                    _id:ObjectId,
                    value: Object
                }
            ]
        }
    ]
}, { versionKey: false });

const Instance = mongoose.model("instance", InstanceScheme);
const instance = new Instance({
    templateId: "5ddbe9ccf524632c08ef6aa1" ,
    price: 34.75
});
instance.specsSheets = [{ _id: "5ddbe7ccc09c2f18d49427cc" }];
const _id = "5ddbde9c68d1ef29d4820b0a";
const value = 10.5
instance.specsSheets[0].specs = [{ _id, value }]

instance.save()
    .then(function (doc) {
        console.log("Сохранен объект", doc);
        mongoose.disconnect();  // отключение от базы данных
    })
    .catch(function (err) {
        console.log(err);
        mongoose.disconnect();
    });