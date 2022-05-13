import RestoSource from "../../data/resto-source";
import { createRestoItem } from "../templates/template-creator";

const ListResto = {
  async render() {
    return `
    <h2 tabindex="0">List Restaurant</h2>
    <div id="data-resto" class="explore-container"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestoSource.listResto();
    const restoContainer = document.querySelector("#data-resto");
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItem(resto);
    });
  },
};

export default ListResto;
