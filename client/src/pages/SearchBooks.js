import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import SaveBookBtn from "../components/SaveBookBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem, Card2, SaveBookBtn2 } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Card from "../components/Card";

function SearchBooks() {
  // Setting our component's initial state
  const [books, setResults] = useState([])
  const [search, setSearchObject] = useState({})

  // // Loads all books and sets them to books
  // function loadBooks() {
  //   API.getBooks()
  //     .then(res =>
  //       setResults(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchObject({ [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (search.query) {
      API.googleSearch(search.query).then(res => { setResults(res.items) })
        .then(setSearchObject())
        .catch(err => console.log(err));
    }
  };

  function saveForLater(book) {
    API.saveBook(book)
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Google Books Search</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="query"
              placeholder="Enter Book Here"
            />
            <FormBtn
              // disabled={!(search.query)}
              onClick={handleFormSubmit}
            >
              Search
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Search Results</h1>
          </Jumbotron>
          {books.length ? (
            <div>
              {books.map(book => {
                return (
                  <Container>
                    <SaveBookBtn onClick={() => saveForLater({
                      title: book.volumeInfo.title,
                      authors: book.volumeInfo.authors,
                      image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "",
                      description: book.volumeInfo.description,
                      link: book.volumeInfo.infoLink,
                      gBookId: book.id

                    })} />
                    <Card
                      key={book.id ? book.id : ""}
                      title={book.volumeInfo.title ? book.volumeInfo.title : ""} authors={book.volumeInfo.authors ? book.volumeInfo.authors : ""} image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ""}
                      description={book.volumeInfo.description ? book.volumeInfo.description : ""} link={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : ""} gBookId={book.id ? book.id : ""}>

                    </Card>

                  </Container>
                )
              })}
            </div>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default SearchBooks;

