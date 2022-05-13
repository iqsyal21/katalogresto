import FavoriteResto from '../../data/favorite-resto';
import { createRestoItem } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <h2 tabindex="0">Favorite Restaurant</h2>
    <div id="fav-resto" class="explore-container"></div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteResto.getAllRestaurants();
    const restaurantContainer = document.querySelector('#fav-resto');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItem(resto);
    });
  },
};

export default Like;
