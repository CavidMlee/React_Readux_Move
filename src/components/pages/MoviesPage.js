import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesList from '../MoviesList';

import { fetchMovies, deleteMovie } from '../../actions/movies.js';


class MoviesPage extends Component {

    componentDidMount() {
        this.props.fetchMovies();

    }
    render() {

        return (
            <div>
                <h1>Movies</h1>
                <MoviesList
                    movies={this.props.movies}
                    deleteMovie={this.props.deleteMovie}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ movies }) => {
    return {
        movies
    }
};

const mapDispatchToProps = {
    fetchMovies,
    deleteMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)