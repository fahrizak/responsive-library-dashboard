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


export const getBooks = function(currentPage, limit, search) {

  const newBooks = books
  .filter((item) => {
      const searchTerm = search.toLowerCase()
      return (
          searchTerm === '' ||
          item.judul.toLowerCase().includes(searchTerm) ||
          item.penerbit.toLowerCase().includes(searchTerm) ||
          item.tahun_terbit.toString().includes(searchTerm)
      )
  })

  let array = []
  for (let i = (currentPage - 1) * limit; i < (currentPage * limit) && newBooks[i]; i++) {
      array.push(newBooks[i])
  }

  return array
}



export const getLength = function (search) {

  console.log(search)
  if (search === ""){
      
      return books.length
  }

  const newBooks = books
  .filter((item) => {
      const searchTerm = search.toLowerCase()
      return (
          searchTerm === '' ||
          item.judul.toLowerCase().includes(searchTerm) ||
          item.penerbit.toLowerCase().includes(searchTerm) ||
          item.tahun_terbit.toString().includes(searchTerm)
      )
  })

  
      return newBooks.length
  

}