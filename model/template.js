const mongoose = require('mongoose');

var dbURI = "mongodb://localhost:27017/testdb";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

const userScheme = new mongoose.Schema({
    name: String,
    specsSheets: [
        {
            name: String,
            specs: [{
                name:String,
                unit:String
            }]
        }
    ]
}, { versionKey: false });

const User = mongoose.model("template", userScheme);
const user = new User({ name: "Bihuuuhlcon" });
user.specsSheets = [{ name: 'Химические показатели' }];
user.specsSheets[0].specs=[{name:"Протеинчик",unit:"%"}]
user.save()
    .then(function (doc) {
        console.log("Сохранен объект", doc);
        mongoose.disconnect();  // отключение от базы данных
    })
    .catch(function (err) {
        console.log(err);
        mongoose.disconnect();
    });