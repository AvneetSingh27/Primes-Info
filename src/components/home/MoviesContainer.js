import React, { Component } from 'react';

import {connect} from 'react-redux';
import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
    render() {
        const {movies} = this.props;
        let content = '';
        let notFound = (
            <div className="container">
                <p>No results Found!</p>
            </div>
        );
        content = movies.Response === 'True' ? movies.Search.map((movie,index) => <MovieCard key={index} movie = {movie} />) : notFound;
        return (
            <div className="row">
               {content} 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);
