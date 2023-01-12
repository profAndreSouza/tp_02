const mongoose = require('mongoose');

async function startDB() {
    // username: senai
    // password: Tjh8zx7BHycABnQI
    await mongoose.connect('mongodb+srv://senai:Tjh8zx7BHycABnQI@cluster0.xwjpeut.mongodb.net/test');
}

module.exports = startDB;