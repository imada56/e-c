import React from 'react';

function Card({ title, description, imageSrc }) {
  return (
    <div className=' w-[400px] flex flex-col justify-center items-center gap-3'>
      <div className='h-20'>
        <img className='h-full rounded-full' src={imageSrc} alt='' />
      </div>
      <h2 className='text-xl text-blue-700'>{title}</h2>
      <p className='text-center'>{description}</p>
    </div>
  );
}

export default Card;
