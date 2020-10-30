const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri = process.env.ATLAS_URI || 'mongodb://localhost:27017';

module.exports = () => {
    return mongoClient.connect(uri)
        .then(function (connection) {
            console.log('connected to db')
            return connection.db('booksDB');
        })
}
