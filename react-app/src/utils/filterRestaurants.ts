import Restaurant from '../types/Restaurant';

function nomalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterConditions = {
  filterText: string;
  filterCategory: string;
};

function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: FilterConditions,
): Restaurant[] {
  const match = (
    restaurant: Restaurant, //
  ) => restaurant.category === filterCategory;

  // eslint-disable-next-line operator-linebreak
  const filteredRestaurants =
    filterCategory === '전체' ? restaurants : restaurants.filter(match);

  const query = nomalize(filterText);

  if (!query) return filteredRestaurants;

  const contains = (
    restaurant: Restaurant, //
  ) => nomalize(restaurant.name).includes(query);

  return filteredRestaurants.filter(contains);
}

export default filterRestaurants;
