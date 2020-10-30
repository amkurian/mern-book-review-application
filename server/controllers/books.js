const objectId = require('mongodb').ObjectID;
const _ = require("lodash");

class Books {
    getAll(req, res){
        const db = req.app.db;
        db.collection('books').find({}).toArray((err, books) => {
            if(err) { console.log(err); }
            res.json({status: 200, books: books});
        });
    }

    getOne(req, res){
        const db = req.app.db;
        db.collection('books').findOne({_id: objectId(req.params._id)}, (err, book) => {
            if(err) { console.log(err); }
            res.json({status: 200, book: book});
        });
    }

    review(req, res){
        const db = req.app.db;
        var review = _.omitBy({
            customerName: req.body.customerName,
            rating: req.body.rating,
            reviewDescription: req.body.reviewDescription
        }, _.isNil);
        console.log(review)
        db.collection('books').findOneAndUpdate({_id: objectId(req.params._id)}, {$push: {reviews: review}}, err => {
            if(err) {
                res.json({status: 200, errors: err});
            } else {
                res.json({status: 200});
            }
        });
    }

    update(req, res){
        const db = req.app.db;
        var book = _.omitBy({
            name: req.body.name,
            author: req.body.author,
            description: req.body.description,
            isbn: req.body.isbn
        }, _.isNil);
        db.collection('books').findOneAndUpdate({_id: objectId(req.params._id)}, {
            $set: book
          }, {runValidators: true}, err => {
            if(err) {
                res.json({status: 200, errors: err});
            } else {
                res.json({status: 200});
            }
        });
    }

    create(req, res){
        const db = req.app.db;
        if (!req.body.reviews) {
            req.body.reviews = [];
        }
        db.collection('books').insert(req.body, err => {
            if(err) {
                res.json({status: 200, errors: err});
            } else {
                res.json({status: 200});
            }
        });
    }

    delete(req, res){
        const db = req.app.db;
        db.collection('books').findOneAndDelete({_id: objectId(req.params._id)}, err => {
            if(err) { console.log(err); }
            res.json({status: 200});
        });
    }
}

module.exports = new Books();