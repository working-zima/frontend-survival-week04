import { useEffect, useState } from 'react';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ShoppingCart from './components/ShoppingCart';
import { get } from './utils/fetch';
import Restaurant from './types/Restaurant';

export default function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  useEffect(() => {
    const fetchData = async () => {
      const data = await get({ host: 'localhost:3000', path: 'restaurants' });
      setRestaurants(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <ShoppingCart />
      <FilterableRestaurantTable
        restaurants={restaurants}
        filterText={filterText}
        filterCategory={filterCategory}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <p>[영수증 나오는 곳]</p>
    </div>
  );
}
