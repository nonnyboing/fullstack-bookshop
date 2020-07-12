const Book = require('../models/books');

exports.addBook = (req, res) => {
    book = new Book(
        {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year,
            price: req.body.price
        }
    );
    book.save()
        .then(() => {res.status(200).json({message: 'book saved successfully'})})
        .catch(err => res.status(404).json({error: err}));
};

exports.deleteBook = (req, res) => {
    Book.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({message: 'book deleted'}))
        .catch(err => res.status(400).json({error: err}));
};

exports.getBook = (req, res) => {
    Book.find()
        .then((book) => res.status(201).json(book))
        .catch((error) => res.status(400).json({succes: false, message: 'failed to load books'}));
    
};