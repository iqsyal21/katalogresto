/* eslint-disable eqeqeq */
/* eslint-disable no-const-assign */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {

  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((resto) => resto.id == id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurant(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(resto.id)) {
      return;
    }

    favoriteRestaurants.push(resto);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter((resto) => resto.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
