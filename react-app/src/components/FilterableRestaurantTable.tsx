import { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';
import Restaurant from '../types/Restaurant';

type getProps = {
  host: string;
  path: string;
};

async function get({ host, path }: getProps) {
  const url = `http://${host}/${path}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function FilterableRestaurantTable() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get({ host: 'localhost:3000', path: 'restaurants' });
      setRestaurants(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <SearchBar />
      <RestaurantTable restaurants={restaurants} />
    </div>
  );
}

export default FilterableRestaurantTable;
