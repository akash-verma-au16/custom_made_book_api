const fs = require('fs');
const genId = require('gen-id')('Ann');
let UID = [];

const localWrite = books => {
    const json =  JSON.stringify(books, null, 2);
    fs.writeFileSync(__dirname + '/../database/books.json', json);
};

const assignUID = (books) => {
    books.forEach(book => {
        if(book.id === '') {
            book.id = genId.generate();
        };
    });
    localWrite(books);
};

const updateUID = books => {
    books.forEach(book => UID.push(book.id));
};

module.exports = {
    assignUID,
    updateUID,
    UID
};