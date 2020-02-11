import React, { Component } from "react";

import { Row, Container, Col, Image } from "react-bootstrap";

class MovieRow extends Component {
  render() {
    return (
      <Container id="movieRow">
        <Row>
          <Col xs="auto">
            <Image
              width="100"
              src={
                "https://image.tmdb.org/t/p/w200/" +
                this.props.movie.poster_path
              }
            />
          </Col>
          <Col>
            <h3>{this.props.movie.title}</h3>
            <p className="text-overflow"> {this.props.movie.overview}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MovieRow;
