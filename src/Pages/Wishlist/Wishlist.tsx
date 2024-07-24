import React from 'react';
import ContinerProductCard from '../../component/Products/ContinerProductCard';
import { useSelector } from 'react-redux';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useFirebase } from '../../Firebase/UseFirebase'; // Adjusted import
import { Product} from '../../Firebase/types';

function Wishlist() {
  const prudact = useFirebase(); // Using useFirebase hook
  const { TabLike } = useSelector((state: any) => state.Liked); // Adjust the type of state as per your redux store

  const ArrayLiked: Product[] = prudact.product.filter((item: Product) =>
    TabLike.includes(item.id)
  );

  return (
    <div className='min-h-screen mt-[140px] '>
      {TabLike.length === 0 ? (
        <div className='w-[85%] container m-auto flex flex-col p-7 gap-3 bg-gray-400 items-center justify-center mt-60'>
          <h1 className='text-4xl font-semibold text-[#F5F5F5]'>
            {' '}
            You Did Not Like Any Product
          </h1>
          <FaExclamationTriangle className='text-8xl text-[#F5F5F5] ' />
        </div>
      ) : (
        <div className='w-[85%] container m-auto mt-32'>
          <ContinerProductCard
            tb={ArrayLiked}
            w={'oui'} // Adjust type if necessary
            Produits={''} // Adjust type if necessary
            Ajouter={''} // Adjust type if necessary
            y={true} // Adjust type if necessary
          />
        </div>
      )}
    </div>
  );
}

export default Wishlist;
