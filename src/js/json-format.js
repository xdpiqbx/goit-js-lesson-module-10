const book = {
    name: 'Huning on deer',
    author: 'Martah Ketra',
    genre: 'detective',
    pageCount: '724',
    publisher: 'OOO Astrel'
};
console.log(typeof book)
console.log(book)

const stringifiedBook = JSON.stringify(book);
console.log(typeof stringifiedBook)
console.log(stringifiedBook)

const parsedBook = JSON.parse(stringifiedBook)
console.log(typeof parsedBook)
console.log(parsedBook)