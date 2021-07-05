import React from 'react';
import { Link } from 'react-router-dom';
import { electronicsApi } from './gadgets';

function Electronics() {
  return (
    <>
      <ul>
        {electronicsApi.map((e) => (
          <li key={e.id}>
            <Link to={`/gadgets/${e.name}`}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Electronics;
