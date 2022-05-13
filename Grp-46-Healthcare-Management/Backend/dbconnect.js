require('dotenv').config();
const mongoose = require('mongoose');

const dbconnect = async() => {
    try{
        
        const dbconnection = await mongoose.connect(process.env.MongoDB, {
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
