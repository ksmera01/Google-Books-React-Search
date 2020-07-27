import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Card from "../components/Card";
// import { Input, TextArea, FormBtn } from "../components/Form";

function SavedBooks() {
    // Setting our component's initial state
    const [booksSaved, setBooksSaved] = useState([])


    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooksSaved(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>Saved Books</h1>
                    </Jumbotron>
                    {booksSaved.length ? (
                        <div>
                            {booksSaved.map(book => {
                                return (
                                    <Container>
                                        <DeleteBtn onClick={() => deleteBook(book._id)} />
                                        <Card
                                            key={book.id}
                                            title={book.title} authors={book.authors} image={book.image}
                                            description={book.description} link={book.link} gBookId={book.gBookId}>
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


export default SavedBooks;