import React from 'react';
import { Link } from 'react-router-dom';
import { getMark } from './gadgets';

function Models(props) {
  const laptopMarkList = getMark(props.match.params.mark);

  return (
    <>
      <ul>
        {laptopMarkList.map((e) => (
          <li key={e.id}>
            <Link to={`/gadgets/laptops/${e.mark}/${e.model}`}>{e.model}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Models;
