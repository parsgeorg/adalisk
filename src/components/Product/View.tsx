import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../services/Products';

interface Props {
  data: Product;
}

const View: React.SFC<Props> = ({ data }) => (
  <div className="products">
    {Object.entries(data).map((entry, key) => (
      <div key={key}>
        {entry[0]}:{entry[1]}
      </div>
    ))}
    <Link to="/products">К таблице с данными</Link>
  </div>
);

export default View;
