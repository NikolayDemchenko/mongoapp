const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
var dbURI = "mongodb://localhost:27017/testdb";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

const quantityUnitScheme = new mongoose.Schema({
    name: String,
    abbr: String,

}, { versionKey: false });

const Item = mongoose.model("quantityUnit", quantityUnitScheme);
const createItem = (name, abbr) => {
    const item = new Item({ name, abbr });
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
createItem("Процент", "%");




