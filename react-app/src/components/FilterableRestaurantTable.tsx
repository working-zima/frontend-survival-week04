import selectCategories from '../utils/selectCategories';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';
import Restaurant from '../types/Restaurant';
import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantTable = {
  restaurants: Restaurant[];
  filterText: string;
  filterCategory: string;
  setFilterText: (text: string) => void;
  setFilterCategory: (text: string) => void;
};

function FilterableRestaurantTable({
  restaurants,
  filterText,
  filterCategory,
  setFilterText,
  setFilterCategory,
}: FilterableRestaurantTable) {
  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText,
    filterCategory,
  });

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}

export default FilterableRestaurantTable;
