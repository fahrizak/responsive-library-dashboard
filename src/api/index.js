import books from './db.json'


books.sort((a, b) => {
    if (a.judul < b.judul) {
      return -1;
    }
    if (a.judul > b.judul) {
      return 1;
    }
    return 0;
  });

export const getBooks = function(page, limit) {
    let array = []
    for (let i = (page - 1) * limit; i < (page * limit) && books[i]; i++) {
        array.push(books[i])
    }
    return array
}

export const getLength = function () {
    return books.length
}