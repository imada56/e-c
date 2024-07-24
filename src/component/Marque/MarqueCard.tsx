import React from 'react';

interface MarqueCardProps {
  img?: string;
}

const MarqueCard: React.FC<MarqueCardProps> = ({ img }) => {
  return (
    <div className='h-28 mt-5 md:mx-5'>
      <div className='h-[50%] md:h-[70%]'>
        <img className='h-[90%] m-auto object-cover' src={img} alt='Marque' />
      </div>
    </div>
  );
};

export default MarqueCard;
