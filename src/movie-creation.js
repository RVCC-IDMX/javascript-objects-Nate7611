/**
 * @file movie-creation.js
 * @fileoverview Demonstrates movie object creation using object literal notation.
 * The movie object includes properties like id, title, director, year, genre, rating, and a cast array.
 * This version of createMovieObject() accepts an options object and uses minimal defaults (empty strings, 0, or empty array)
 * for missing properties.
 * @module movie-creation
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
 */

import { v4 as uuidv4 } from 'uuid';

/**
 * Creates a movie object with the provided properties or minimal default values if any are missing.
 *
 * @param {object} [options={}] - An object containing movie properties.
 * @param {string} [options.title=''] - The title of the movie.
 * @param {string} [options.director=''] - The director of the movie.
 * @param {number} [options.year=0] - The release year of the movie.
 * @param {string} [options.genre=''] - The genre of the movie.
 * @param {number} [options.rating=0] - The rating of the movie.
 * @param {string[]} [options.cast=[]] - An array of cast member names.
 * @returns {object} - A new movie object with a unique id.
 * @see https://www.npmjs.com/package/uuid
 */
export function createMovieObject(options = {}) {
  // Use destructuring with minimal default values.
  const {
    title = '',
    director = '',
    year = 0,
    genre = '',
    rating = 0,
    cast = []
  } = options;

  // Generate a unique ID using uuid and return the movie object.
  return {
    id: uuidv4(),
    title,
    director,
    year,
    genre,
    rating,
    cast
  };
}

/**
 * Returns a pretty printed string of the movie object.
 * The function uses a template literal to construct a multi-line string representing the movie's properties.
 *
 * @param {object} movie - The movie object to be formatted. Expected properties:
 *  - title: string
 *  - year: number
 *  - director: string (optional)
 *  - genre: string
 *  - rating: number
 *  - cast: array of strings
 * @returns {string} - A formatted string representing the movie.
 *
 */
export function prettyPrint(movie) {
  return `----------------------------------------
Title   : ${movie.title || 'N/A'}
Year    : ${movie.year || 'N/A'}
Director: ${movie.director || 'N/A'}
Genre   : ${movie.genre || 'N/A'}
Rating  : ${movie.rating || 'N/A'}
Cast    : ${Array.isArray(movie.cast) && movie.cast.length ? movie.cast.join(', ') : 'N/A'}
----------------------------------------`;
}

// --------------------
// Example Code Section
// --------------------

// Toggle examples on or off.
const SHOW_EXAMPLES = false;

if (SHOW_EXAMPLES) {
  // Creating a movie using default values (empty strings, 0, empty array).
  const defaultMovie = createMovieObject();
  console.log('Default Movie:');
  console.log(prettyPrint(defaultMovie));

  // Creating a movie with custom properties.
  const customMovie = createMovieObject({
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page']
  });
  console.log('Custom Movie:');
  console.log(prettyPrint(customMovie));
}
