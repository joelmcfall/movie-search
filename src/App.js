import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import { Row, Col, Image, Form, FormControl } from "react-bootstrap";

import MovieRow from "./components/movieRow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };

    console.log(this.state.movies);
    this.Search(this.state.search);
  }

  handleSearch(event) {
    console.log(event.target.value);
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
          console.log(movieR.props.movie.poster_path);
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
        <Row id="header" className="align-items-center">
          <Col className="no-padding" xs="auto">
            <Image src="https://via.placeholder.com/100"></Image>
          </Col>
          <Col xs={8}>
            <h1>Movie </h1>
          </Col>
        </Row>
        <Row id="search">
          <Col>
            <Form>
              <FormControl
                type="text"
                placeholder="Search"
                onChange={this.handleSearch.bind(this)}
              ></FormControl>
            </Form>
          </Col>
        </Row>
        {this.state.movies}
      </div>
    );
  }
}

export default App;
