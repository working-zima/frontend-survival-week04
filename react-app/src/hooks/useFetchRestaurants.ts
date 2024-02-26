import { useEffect } from 'react';
import { get } from '../utils/fetch';
import Restaurant from '../types/Restaurant';

function useFetchRestaurants(
  setRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>,
) {
  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await get({ host: 'localhost:3000', path: 'restaurants' });
      setRestaurants(data);
    };

    fetchRestaurants();
  }, []);
}

export default useFetchRestaurants;
