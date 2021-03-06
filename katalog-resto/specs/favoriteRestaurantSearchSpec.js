import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteResto from '../src/scripts/data/favorite-resto';

describe('Searching restaurants', () => {
  let presenter;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    document.body.innerHTML = `
      <div id="restaurant-search-container">
          <input id="query" type="text">
          <div class="restaurant-result-container">
              <ul class="restaurants">
              </ul>
          </div>
      </div>
      `;
  };

  const constructPresenter = () => {
    spyOn(FavoriteResto, 'searchRestaurants');
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants: FavoriteResto,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  xit('should be able to capture the query typed by the user', () => {
    searchRestaurants('restaurant ghoib');

    expect(presenter.latestQuery).toEqual('restaurant ghoib');
  });

  xit('should ask the model to search for liked restaurants', () => {
    searchRestaurants('restaurant ghoib');

    expect(FavoriteResto.searchRestaurants)
      .toHaveBeenCalledWith('restaurant ghoib');
  });

  it('should show the found restaurants', () => {
    presenter._showFoundRestaurants([{ id: 1 }]);
    expect(document.querySelectorAll('.restaurant').length).toEqual(1);

    presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }]);
    expect(document.querySelectorAll('.restaurant').length).toEqual(2);
  });

  it('should show the title of the found restaurants', () => {
    presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }]);
    expect(document.querySelectorAll('.restaurant__title').item(0).textContent)
      .toEqual('Satu');
  });

  it('should show the title of the found restaurants', () => {
    presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }]);
    expect(document.querySelectorAll('.restaurant__title').item(0).textContent)
      .toEqual('Satu');

    presenter._showFoundRestaurants(
      [{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }],
    );

    const restaurantTitles = document.querySelectorAll('.restaurant__title');
    expect(restaurantTitles.item(0).textContent).toEqual('Satu');
    expect(restaurantTitles.item(1).textContent).toEqual('Dua');
  });

  it('should show - for found restaurant without title', () => {
    presenter._showFoundRestaurants([{ id: 1 }]);

    expect(document.querySelectorAll('.restaurant__title').item(0).textContent)
      .toEqual('-');
  });

  it('should show the restaurants found by Favorite Restaurants', (done) => {
    document.getElementById('restaurant-search-container')
      .addEventListener('restaurants:searched:updated', () => {
        expect(document.querySelectorAll('.restaurant').length).toEqual(3);
        done();
      });

    FavoriteResto.searchRestaurants.withArgs('restaurant ghoib').and.returnValues([
      { id: 111, title: 'restaurant abc' },
      { id: 222, title: 'ada juga restaurant abcde' },
      { id: 333, title: 'ini juga boleh restaurant a' },
    ]);

    searchRestaurants('restaurant ghoib');
  });
});
