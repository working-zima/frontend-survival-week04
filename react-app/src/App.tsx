import { useEffect, useState } from 'react';
import { useInterval } from 'usehooks-ts';

import Restaurant from './types/Restaurant';
import Post from './types/Post';
import { get } from './utils/fetch';
import ShoppingCart from './components/ShoppingCart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import Receipt from './components/Receipt';

export default function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');
  const [isOrdered, setIsOrdered] = useState<boolean>(false);
  const [receipt, setReceipt] = useState<Post>({
    id: '',
    menu: [{ id: '', name: '', price: 0 }],
    totalPrice: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await get({ host: 'localhost:3000', path: 'restaurants' });
      setRestaurants(data);
    };

    fetchData();
  }, []);

  useInterval(
    () => {
      setIsOrdered((prevIsOrder) => !prevIsOrder);
    },
    isOrdered ? 5000 : null,
  );

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <ShoppingCart setReceipt={setReceipt} setIsOrdered={setIsOrdered} />
      <FilterableRestaurantTable
        restaurants={restaurants}
        filterText={filterText}
        filterCategory={filterCategory}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      {isOrdered ? <Receipt receipt={receipt} /> : <p>[영수증 나오는 곳]</p>}
    </div>
  );
}
