const mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect('mongodb://127.0.0.1:27017/fakeProducts', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('Connected to MongoDB'));
}
