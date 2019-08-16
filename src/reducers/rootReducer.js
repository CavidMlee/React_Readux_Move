import { combineReducers } from 'redux';

import movies from './movies';
import newMovies from './newMovies';

export default combineReducers({
    movies,
    newMovies
});