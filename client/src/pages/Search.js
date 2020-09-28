import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);

    // Load all books and store them with setBooks
    useEffect(() => {
      searchBooks("harry potter");
    }, [])

  function searchBooks(query) {
    API.search(query)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setBooks({
      [name]: value
    });
  };

  // When the form is submitted, search the Google Books API for `this.state.search`
  function handleFormSubmit(event) {
    event.preventDefault();
    this.searchBooks(this.state.books);
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Search for and Save books of interest</h1>
          </Jumbotron>
          <form className="m-auto">
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Book name (required)"
            />
            <FormBtn
              onClick={handleFormSubmit}
            >
              Search Book
            </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}


export default Search;
