import { useLocalStorage } from 'usehooks-ts';

import Food from '../types/Food';
import post from '../utils/fetch';
import Post from '../types/Post';

type ShoppingCartProps = {
  setReceipt: (array: Post) => void;
  setIsOrdered: React.Dispatch<React.SetStateAction<boolean>>;
};

function ShoppingCart({ setReceipt, setIsOrdered }: ShoppingCartProps) {
  const [cartItems, setCartItem] = useLocalStorage<Food[]>('cart', []);

  const estimatedOrderAmount = cartItems.reduce((acc, item) => {
    const { price } = item;
    return acc + price;
  }, 0);

  const handleCancel = (id: string) => {
    const updatedCartItem = cartItems.filter((item) => item.id !== id);
    setCartItem(updatedCartItem);
  };

  const handleOrder = async () => {
    const response = await post({
      host: 'localhost:3000',
      path: 'orders',
      body: { menu: cartItems, totalPrice: estimatedOrderAmount },
    });

    setReceipt(response);
    setIsOrdered((prevIsOrdered) => !prevIsOrdered);
    setCartItem([]);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>점심 바구니</h2>
      <ul style={{ width: '20%' }}>
        {cartItems.map((item) => {
          const { id, name, price } = item;
          return (
            <li key={id} style={{ display: 'flex', paddingBlock: '0.5rem' }}>
              <span style={{ margin: '0px auto' }}>
                {name}
                (
                {price.toLocaleString()}
                원)
              </span>
              <button
                type="button"
                style={{ marginLeft: '0.5rem' }}
                onClick={() => handleCancel(id)}
              >
                취소
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={() => handleOrder()}>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        합계: {estimatedOrderAmount.toLocaleString()}원 주문
      </button>
    </div>
  );
}

export default ShoppingCart;
