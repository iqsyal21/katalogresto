import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteResto from '../../src/scripts/data/favorite-resto';

const createLikeButtonPresenterWithRestaurant = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteResto,
    resto,
  });
};

export { createLikeButtonPresenterWithRestaurant };
