import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import { Row, Col, Image, Form, FormControl, Container } from "react-bootstrap";

import MovieRow from "./components/movieRow";
import logo from "./Images/logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };

    this.Search(this.state.search);
    document.title = "Movie Search";
  }

  handleSearch(event) {
    const search = event.target.value;
    this.Search(search);
  }

  Search(searchTerm) {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=29408d281b8290ab79293fd3f9c29a82&language=en-US&query=" +
          searchTerm +
          "&page=1&include_adult=false"
      )
      .then(res => {
        const movies = res.data.results;

        var movieRows = [];

        movies.forEach(movie => {
          const movieR = <MovieRow key={movie.id} movie={movie} />;

          if (
            movieR.props.movie.overview !== "" &&
            movieR.props.movie.poster_path !== null
          )
            movieRows.push(movieR);
        });

        this.setState({ movies: movieRows });
      });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row id="header" className="align-items-center">
            <Col xs="auto">
              <Image id="logo" src={logo}></Image>
            </Col>
            <Col xs="auto">
              <h1>Movie Search</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Form className="searchbar">
              <FormControl
                type="text"
                placeholder="Search"
                onChange={this.handleSearch.bind(this)}
              ></FormControl>
            </Form>
          </Row>
        </Container>
        {this.state.movies}
      </div>
    );
  }
}

export default App;
