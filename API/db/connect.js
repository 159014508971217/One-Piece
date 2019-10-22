var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/onepiece', { useNewUrlParser: true });
var db = mongoose.connection;
db.on("err", () => {
    console.log('db no ok')
});
db.once("open", ()=> {
    console.log('db ok')
});