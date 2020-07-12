const express = require('express');
const router = express.Router();

const bookCtrl = require('../contollers/books')

const Book = require('../models/books');

router.post('/', bookCtrl.addBook);

router.delete('/:id', bookCtrl.deleteBook);

router.get('/', bookCtrl.getBook);



module.exports = router;