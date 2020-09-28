import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

function BookSearch() {
    // Setting our component's initial state
    const [books, setBooks] = useState([]);
    const [formObject, setFormObject] = useState({});

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search for and Save books of interest</h1>
            </Jumbotron>
            <form className="m-auto">
              <Input
                // onChange={handleInputChange}
                name="title"
                placeholder="Book name (required)"
              />
              <FormBtn
                disabled={!(formObject.title)}
                // onClick={handleFormSubmit}
              >
                Search Book
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }


export default BookSearch;
