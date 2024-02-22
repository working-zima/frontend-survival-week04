import React from 'react';

function ShoppingCart() {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>점심 바구니</h2>
      <ul>장바구니 예정</ul>
      <button type="button">
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        합계: 0원 주문
      </button>
    </div>
  );
}

export default ShoppingCart;
