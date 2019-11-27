const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
var dbURI = "mongodb://localhost:27017/testdb";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

const paymentScheme = new mongoose.Schema({
   name:String

}, { versionKey: false });
const Item = mongoose.model("payment", paymentScheme);

const createItem=(name)=>{  
const item = new Item({name});
item.save()
    .then(function (doc) {
        console.log("Сохранен объект", doc);
        mongoose.disconnect();  // отключение от базы данных
    })
    .catch(function (err) {
        console.log(err);
        mongoose.disconnect();
    });
}
createItem("Оплата после приёмки");