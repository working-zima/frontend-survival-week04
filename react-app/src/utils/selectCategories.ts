import Restaurant from '../types/Restaurant';

function selectCategories(restaurants: Restaurant[]): string[] {
  return restaurants.reduce((acc: string[], restaurant: Restaurant) => {
    const { category } = restaurant;

    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}

export default selectCategories;
