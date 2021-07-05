import React from 'react';
import { getModel } from './gadgets';

function Model(props) {
  const laptopModel = getModel(props.match.params.model);

  return (
    <div>
      <h2>{laptopModel.model}</h2>
    </div>
  );
}

export default Model;
