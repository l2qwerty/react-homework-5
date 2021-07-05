import React from 'react';
import { Link } from 'react-router-dom';
import { marksApi } from './gadgets';

function Laptop() {
  return (
    <>
      <ul>
        {marksApi.map((el) => (
          <li key={el.id}>
            <Link to={`/gadgets/laptops/${el.mark}`}>{el.mark}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Laptop;
