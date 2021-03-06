import axios from "axios";

export default {

  //Google Books search
  googleSearch: function (query) {
    const URI = 'https://www.googleapis.com/books/v1/volumes?q=' + query
    return axios.get(URI).then(res => { return res.data })
  },

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
