const mongoose = require('mongoose');

const uri = process.env.dburl;


async function connectToDatabase() {
    try {
        await mongoose.connect(uri);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

module.exports = connectToDatabase;