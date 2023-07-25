//NOTE: Importing json data from a file

import usersData from './users.json';


/**
 * Array of user objects.
 * @typedef {Object} User
 * @property {number} id - The user's ID.
 * @property {string} firstName - The user's first name.
 * @property {string} lastName - The user's last name.
 * @property {string} email - The user's email address.
 * @property {string} gender - The user's gender.
 * @property {string} city - The user's city.
 * @property {string} country - The user's country.
 * @property {string} favoriteMovie - The user's favorite movie.
 */


/**
 * Array of user objects.
 * @type {User[]}
 */
export const Users = usersData.map((data) => {
  const user = {
    id: data.id,
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    gender: data.gender,
    city: data.city,
    country: data.country,
    favoriteMovie: data.favoriteMovie 
  }
  return user;
})
