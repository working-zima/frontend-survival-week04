/* eslint-disable react/jsx-one-expression-per-line */
import { useLocalStorage } from 'usehooks-ts';

import Food from '../types/Food';
import Cart from '../types/Cart';

type FoodProps = {
  menu: Food[];
};

function Foods({ menu }: FoodProps) {
  const [, setCart] = useLocalStorage<Cart[]>('cart', []);

  return (
    <ul>
      {menu.map((food) => {
        const { name, price } = food;
        const id = `${Date.now()}-${name}-${price}`;
        return (
          <li key={name} style={{ display: 'flex', paddingBlock: '0.5rem' }}>
            <span style={{ margin: '0px auto' }}>
              {name}({price.toLocaleString()}
              원)
            </span>
            <button
              name={name}
              type="button"
              style={{ marginLeft: '0.5rem' }}
              onClick={
                () =>
                  // eslint-disable-next-line implicit-arrow-linebreak
                  setCart((prevCart) => [...prevCart, { id, name, price }])
                // eslint-disable-next-line react/jsx-curly-newline
              }
            >
              선택
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Foods;
