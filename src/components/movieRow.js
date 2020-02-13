import React, { Component } from "react";

import { Row, Container, Col, Image, Button } from "react-bootstrap";

class MovieRow extends Component {
  showMovie() {
    window.location.href =
      "https://www.themoviedb.org/movie/" + this.props.movie.id;
  }

  render() {
    return (
      <Container id="movieRow">
        <Row>
          <Col xs="auto">
            <Image
              className="movie-img"
              src={
                "https://image.tmdb.org/t/p/w200/" +
                this.props.movie.poster_path
              }
            />
          </Col>
          <Col>
            <h3>{this.props.movie.title}</h3>
            <p className="text-overflow"> {this.props.movie.overview}</p>
            <Button
              className="standard-btn"
              onClick={this.showMovie.bind(this)}
            >
              View
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MovieRow;
