const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    name:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    caption:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users',UserSchema);
