import React, { useState } from 'react';

function SearchBar() {
  const [totalAmount, setTotalAmount] = useState(25000);
  const label = '검색';
  const id = `input-${label}`;
  const placeholder = '식당 이름';
  return (
    <div>
      {' '}
      <div
        className="shopping-cart"
        style={{ marginBottom: '3rem' }}
      >
        <h2>점심 바구니</h2>
        <ul>장바구니 예정</ul>
        <button type="button">
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          합계: {totalAmount}원 주문
        </button>
      </div>
      <div>
        <div className="search-bar">
          <div className="text-field">
            <label
              htmlFor={id}
              style={{ paddingRight: '1rem' }}
            >
              {label}
            </label>
            <input
              id={id}
              type="text"
              placeholder={placeholder}
            />
          </div>
          <ul
            style={{
              display: 'flex',
              padding: 0,
              listStyle: 'none',
            }}
          >
            <li style={{ marginRight: '1rem' }}>
              <button type="button">전체</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
