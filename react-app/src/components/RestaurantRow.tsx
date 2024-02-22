import Restaurant from '../types/Restaurant';
import Foods from './Foods';

type RestaurantRowProps = {
  restaurant: Restaurant;
};

function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <Foods menu={menu} />
      </td>
    </tr>
  );
}

export default RestaurantRow;
