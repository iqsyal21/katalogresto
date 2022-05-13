import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteResto from '../src/scripts/data/favorite-resto';

describe('Favorite Restaurant Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteResto.getAllRestaurants()).forEach(async (resto) => {
      await FavoriteResto.deleteRestaurant(resto.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteResto);
});
