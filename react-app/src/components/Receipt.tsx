import Post from '../types/Post';

type ReceiptProps = {
  receipt: Post;
};

function Receipt({ receipt }: ReceiptProps) {
  const { id, menu, totalPrice } = receipt;
  return (
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
        <p>{id}</p>
      </div>
      <div>
        <h3>주문목록</h3>
        <ul style={{ padding: '0px', listStyle: 'none' }}>
          {menu.map((food) => (
            <li
              key={food.id}
              style={{ display: 'flex', paddingBlock: '0.5rem' }}
            >
              <span style={{ margin: '0px auto' }}>
                {food.name}
                (
                {food.price.toLocaleString()}
                )
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p>
        총 가격:
        {totalPrice.toLocaleString()}
        원
      </p>
    </div>
  );
}

export default Receipt;
