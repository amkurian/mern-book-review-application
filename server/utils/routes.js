const Books = require('../controllers/books');

module.exports = (app) => {
    app.get("/api/books", Books.getAll);
    app.post("/api/books", Books.create);
    app.get("/api/books/:_id", Books.getOne);
    app.post("/api/reviews/:_id", Books.review);
    app.put("/api/books/:_id", Books.update);
    app.delete("/api/books/:_id", Books.delete);
}