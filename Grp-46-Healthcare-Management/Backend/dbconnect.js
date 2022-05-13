require('dotenv').config();
const mongoose = require('mongoose');

const dbconnect = async() => {
    try{
        
        const dbconnection = await mongoose.connect('mongodb+srv://weCare:R9vBDTpYr27tNBg@cluster0.fsqza.mongodb.net/weCare?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Database Connection Eatablished');
    } catch(error) {
        console.log(error);
    }
};

module.exports = dbconnect;