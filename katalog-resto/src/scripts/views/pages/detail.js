import UrlParser from '../../routes/url-parser';
import RestoSource from "../../data/resto-source";
import { createDetailResto, createReviewTemplate } from "../templates/template-creator";
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteResto from '../../data/favorite-resto';

const Detail = {
  async render() {
    return `
    <h2 tabindex="0">Detail Restaurant</h2>
    <div id="restaurant" class="detailresto-container"></div>
    <div id="addReview" class="addreview-container"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailResto = await RestoSource.detailResto(url.id);
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = createDetailResto(detailResto.restaurant);

    const dataMenu = detailResto.restaurant.menus;
    const foodMenu = document.querySelector(".food-menu");
    const drinkMenu = document.querySelector(".drink-menu");
    for (const food of dataMenu.foods) {
      foodMenu.innerHTML += `${food.name}, `;
    }
    for (const drink of dataMenu.drinks) {
      drinkMenu.innerHTML += `${drink.name}, `;
    }

    const dataReview = detailResto.restaurant.customerReviews;
    const reviewer = document.querySelector(".review");
    for (const item of dataReview) {
      reviewer.innerHTML += `<p>${item.name}: ${item.review}, (${item.date})</p>`;
    }

    const reviewContainer = document.querySelector("#addReview");
    reviewContainer.innerHTML += createReviewTemplate();

    const submit = document.getElementById("masukanReview");
    submit.addEventListener("click", () => {
      const idResto = detailResto.restaurant.id;
      const inputNama = document.getElementById("inputNama").value;
      const inputReview = document.getElementById("inputReview").value;
      // eslint-disable-next-line no-shadow
      const dataReview = {
        id: idResto,
        name: inputNama,
        review: inputReview,
      };
      RestoSource.addReview(dataReview);
    });

    const resto = detailResto.restaurant;
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteResto,
      resto,
    });
  },
};

export default Detail;
