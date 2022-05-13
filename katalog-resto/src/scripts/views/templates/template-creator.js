import CONFIG from "../../globals/config";

const createDetailResto = (resto) => `
    <img src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}" alt="${resto.name}" tabindex="0" class="detail-thumbnail" />
    <article tabindex="0" class="detail-item">
        <h3>${resto.name}</h3>
        <p>${resto.address}, ${resto.city}</p>
        <p>${resto.description}</p>
        <p class="food-menu">Foods Menu : </p>
        <p class="drink-menu">Drinks Menu : </p>
        <p class="review">Review</p>
    </article>
    `;

const createRestoItem = (resto) => `
    <article tabindex="0" class="explore-item">
        <img src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}" alt="gambar restoran ${resto.name}" class="explore-thumbnail">
        <h3 style="text-align: center;">${resto.name}</h3>
        <p>${resto.city} (Rating: ${resto.rating})</p>
        <p style="text-align: justify; padding-right: 10px; ">${resto.description.substring(0, 150)} ...</p>
        <a href="${`/#/detail/${resto.id}`}">
          <button type="button" class="more-button">More</button>
        </a>
    </article>
    `;

const createReviewTemplate = () => `
    <section class="input-section">
      <h3>Masukan Review Baru</h3>
      <form id="inputDataReview">
          <div class="input">
              <label for="inputNama">Nama</label>
              <input id="inputNama" type="text" required>
          </div>
          <div class="input">
              <label for="inputReview">Review</label>
              <input id="inputReview" type="text" required>
          </div>
          <button id="masukanReview" type="submit" class="button-submit">Submit</button>
      </form>
    </section>
    `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createDetailResto,
  createRestoItem,
  createReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
