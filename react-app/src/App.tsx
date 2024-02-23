import { useEffect, useState } from 'react';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ShoppingCart from './components/ShoppingCart';
import { get } from './utils/fetch';
import Restaurant from './types/Restaurant';

export default function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');
  const [isOrdered, setIsOrdered] = useState<boolean>(true);

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
      {isOrdered ? (
        <div
          style={{
            width: '50%',
            border: '1px solid black',
            textAlign: 'center',
          }}
        >
          <h2>영수증</h2>
          <div>
            <h3>주문번호</h3>
            <p>12345913413</p>
          </div>
          <div>
            <h3>주문목록</h3>
            <ul style={{ padding: '0px', listStyle: 'none' }}>
              <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
                <span style={{ margin: '0px auto' }}>메뉴</span>
              </li>
              <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
                <span style={{ margin: '0px auto' }}>하나 더</span>
              </li>
            </ul>
          </div>
          <p>총 가격: 3,500원</p>
        </div>
      ) : (
        <p>[영수증 나오는 곳]</p>
      )}
    </div>
  );
}
