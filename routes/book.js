const books = require('../database/books.json');
const { assignUID, updateUID, UID } = require('../utils/utils.js')
const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    assignUID(books);
    res.json(books);
});

router.get('/:id', (req, res) => {
    const params = req.params;
    const book = books.filter(book => book.id === params.id);
    if(book.length) res.json(book);
        else res.send('ERROR 404: Book Not Found!!');
});

router.post('/', (req, res) => {
    const newBook = {...req.body};
    updateUID(books);
    if(!UID.includes(newBook.id)) {
        books.push(newBook);
        assignUID(books);
        res.send('Book Added!!');
    } else res.send('ID Already Exists!!');
});

router.put('/:id', (req, res) => {
    const params = req.params;
    const update = {...req.body};
    books.forEach(book => {
        if(book.id === params.id) {
            if(book.id === update.id || !update.id) {
                book.name = update.name;
                book.author = update.author;
                book.year = update.year;
                assignUID(books);
                res.send('Changes Made Successfully!!');
            } else {
                res.send('ID should be same!!');
                return;
            };
        };           
    });
    res.send('ERROR 404: Book Not Found!!');
});

router.delete('/:id', (req, res) => {
    const params = req.params;
    newBooks = books.filter(book => book.id !== params.id);
    assignUID(newBooks);
    res.send('Deleted Successfully!!');
});

module.exports = router;