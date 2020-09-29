import React, { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { Card } from 'react-bootstrap';
import BookCard from "../components/Cards"
import DataAreaContext from "../utils/DataAreaContext";

function Search() {
  // Setting our component's initial state
  // const [savedBooks, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [developerState, setDeveloperState] = useState({
    books: [],
    results: []
  });

  function searchBooks(query) {
    console.log(query)
    API.search(query)
      .then(res => {
        console.log(res.data.items);
        setDeveloperState({ 
          ...developerState,
          books: res.data.items,
          results: res.data.items
        })
      })
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  // When the form is submitted, search the Google Books API for `this.state.search`
  function handleFormSubmit(event) {
    event.preventDefault();
    searchBooks(searchValue);
  };

  return (
    <DataAreaContext.Provider
      value={{ developerState }}
    >
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
                placeholder="Book name"
              />
              <FormBtn
                onClick={handleFormSubmit}
              >
                Search Book
              </FormBtn>
            </form>
          </Col>
          <Col size="12">
            {developerState.books.length > 0 ? 
              ( <BookCard /> )
              : 
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    No results found - Please enter a different search value
                  </Card.Title>
                </Card.Body>
              </Card>
            }
          </Col>
        </Row>
      </Container>
    </DataAreaContext.Provider>
  );
}


export default Search;
