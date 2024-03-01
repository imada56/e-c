import React from 'react';
import products from '../products.json';
import Card from './Card';

function CardList() {
  return (
    <div className='m-2 border-2 p-2 flex justify-between gap-1'>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          description={product.description}
          imageSrc={product.imageSrc}
        />
      ))}
    </div>
  );
}

export default CardList;
