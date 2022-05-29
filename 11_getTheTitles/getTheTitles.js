const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

const getTheTitles = function(arr) {
    return arr.map(getTitle);
};
console.log(getTheTitles(books));

function getTitle(book){
    return book.title;
}
// Do not edit below this line
module.exports = getTheTitles;
