import React, { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Card } from 'react-bootstrap';
import BookCard from "../components/SearchCard"
import DataAreaContext from "../utils/DataAreaContext";

function SavedBooks() {
  return (
    <DataAreaContext.Provider
      value={{}}
    >
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>View your saved books</h1>
            </Jumbotron>
          </Col>
          <Col size="12">
            {/* {developerState.savedBooks.length > 0 ? 
              ( <BookCard /> )
              :  */}
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    No saved books
                  </Card.Title>
                </Card.Body>
              </Card>
            {/* } */}
          </Col>
        </Row>
      </Container>
    </DataAreaContext.Provider>
  );
}


export default SavedBooks;
