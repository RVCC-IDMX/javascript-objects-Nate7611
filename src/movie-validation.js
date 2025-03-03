/**
 * @file movie-validation.js
 * @fileoverview Demonstrates movie object validation and property access techniques.
 * Provides functions to validate a movie object and retrieve its properties using both dot and bracket notations.
 * @module movie-validation
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

const SHOW_EXAMPLES = false; // Toggle example executions

function isObject(value) {
  return value !== null && typeof value === 'object';
}

/**
 * Checks whether an object has a property of the expected type.
 * @param {object} obj - The object to check.
 * @param {string} prop - The property name.
 * @param {string} expectedType - The expected type (e.g., 'string', 'number').
 * @returns {boolean} - True if the property exists and is of the expected type.
 */
export function hasPropertyOfType(obj, prop, expectedType) {
  return isObject(obj) && typeof obj[prop] === expectedType;
}

/**
 * Retrieves the movie title.
 * @param {object} movie - The movie object.
 * @returns {string} - The movie title, or an empty string if invalid.
 */
export function getMovieTitle(movie) {
  if (!hasPropertyOfType(movie, 'title', 'string') || !isObject(movie)) {
    console.log('getMovieTitle: Invalid movie object or title missing.');
    return '';
  }
  return (movie.title);
}

/**
 * Retrieves the movie year.
 * @param {object} movie - The movie object.
 * @returns {number} - The movie year, or 0 if invalid.
 */
export function getMovieYear(movie) {
  if (!hasPropertyOfType(movie, 'year', 'number') || !isObject(movie)) {
    console.log('getMovieYear: Invalid movie object or year missing.');
    return 0;
  }
  return (movie['year']);
}

/**
 * Determines whether the movie is considered classic (released before 2000).
 * @param {object} movie - The movie object.
 * @returns {boolean} - True if the movie is classic, false otherwise.
 */
export function isMovieClassic(movie) {
  if (!hasPropertyOfType(movie, 'year', 'number') || !isObject(movie)) {
    console.log('isMovieClassic: Movie object invalid or missing year.');
    return false;
  }
  return (movie.year < 2000);
}

/**
 * Returns an array of all property names of the movie object.
 * @param {object} movie - The movie object.
 * @returns {Array} - An array of property names.
 */
export function getMovieKeys(movie) {
  if (!isObject(movie)) {
    console.log('getMovieKeys: Provided input is not a valid object.');
    return [];
  }
  return (Object.keys(movie));
}

/**
 * Returns the count of properties in the movie object.
 * @param {object} movie - The movie object.
 * @returns {number} - The number of properties.
 */
export function getMoviePropertiesCount(movie) {
  if (!isObject(movie)) {
    console.log('getMoviePropertiesCount: Provided input is not a valid object.');
    return 0;
  }
  return (Object.keys(movie).length);
}

// --------------------
// Example Code Section
// --------------------

if (SHOW_EXAMPLES) {
  const sampleMovie = {
    id: 1,
    title: 'Toy Story',
    director: 'John Lasseter',
    year: 1995,
    genre: 'Animation',
    rating: 8.3,
    cast: ['Tom Hanks', 'Tim Allen', 'Don Rickles']
  };

  console.log('Movie Title:', getMovieTitle(sampleMovie));
  console.log('Movie Year:', getMovieYear(sampleMovie));
  console.log('Is Classic:', isMovieClassic(sampleMovie));
  console.log('Movie Keys:', getMovieKeys(sampleMovie));
  console.log('Properties Count:', getMoviePropertiesCount(sampleMovie));
}
