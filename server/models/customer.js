var mongoose = require('mongoose'),
customerSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    phone: String,
    address:{
        street: String,
        city: String,
        State: String,
        zip: String
    }
});

module.exports = mongoose.model('Customer',customerSchema);