import React from 'react';
import MarqueCard from './MarqueCard';
import SubTitle from '../Uitily/SubTitle';
import { Marque} from '../../Firebase/types'; // Assuming you have a ProductItem type defined
import { DataMarque, DataProduit } from '../../Data/ProduitData';

interface ContinerMarqueCardProps {
  tb: Marque[];
  Produits: string;
  Ajouter: string;
  y?: string;
}

const ContinerMarqueCard: React.FC<ContinerMarqueCardProps> = ({ tb, Produits, Ajouter, y }) => {
  return (
    <section className='container m-auto p-2'>
      <SubTitle title={Produits} btnTitle={Ajouter} path={'allMarquePage'} />
      <div className='h-[100%] border-t-2 p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {tb.map((item) => (
          parseInt(item.id) < 6 ? (
            <MarqueCard key={item.id} img={item.imgs} />
          ) : null
        ))}
      </div>
    </section>
  );
};

export default ContinerMarqueCard;
