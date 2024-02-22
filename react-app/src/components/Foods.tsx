/* eslint-disable react/jsx-one-expression-per-line */
import Food from '../types/Food';

type FoodProps = {
  menu: Food[];
};

function Foods({ menu }: FoodProps) {
  return (
    <ul>
      {menu.map((food) => {
        const { name, price } = food;
        return (
          <li
            key={name}
            style={{ display: 'flex', paddingBlock: '0.5rem' }}
          >
            <span style={{ margin: '0px auto' }}>
              {name}({price.toLocaleString()}
              원)
            </span>
            <button
              name={name}
              type="button"
              style={{ marginLeft: '0.5rem' }}
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
