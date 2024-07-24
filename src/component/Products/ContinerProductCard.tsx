import React from 'react';
import ProductCard from './ProductCard';
import { Product} from '../../Firebase/types';
import SubTitle from '../Uitily/SubTitle';
// import SubTitle from '../Uitily/SubTitle';
// import { DataProduit } from '../../Data/ProduitData';

// Define the type for each product item


// Define the props for ContinerProductCard
interface ContinerProductCardProps {
  tb: Product[];
  Produits: string;
  Ajouter: string;
  y?: boolean;
  titlePrdct?:string[][];
  w?: string;
}

const ContinerProductCard: React.FC<ContinerProductCardProps> = ({
  tb,
  Produits,
  Ajouter,
  y,
  titlePrdct,
  w
}) => {

  console.log('tb=',tb)
  return (
    <section className='my-4 p-2 mt-32'>
       <SubTitle title={Produits} btnTitle={Ajouter} path={'allProductsPage'} /> 
      <div className='container m-auto py-6 pl-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {tb.map((i) => (
          y ? (
            <ProductCard
              w={w}
              title={i.title}
              prix={i.prix}
              dscr={i.dscr}
              taille={i.taille}
              arrayImg={i.arrayImg}
              key={i.id}
              imgs={i.imgs}
              id={i.id}
            />
          ) : (
            parseInt(i.id) < 5 ? (
              <ProductCard
                w={w}
                title={i.title}
                prix={i.prix}
                dscr={i.dscr}
                taille={i.taille}
                arrayImg={i.arrayImg}
                key={i.id}
                imgs={i.imgs}
                id={i.id}
              />
            ) : null
          )
        ))}
      </div>
    </section>
  );
};

export default ContinerProductCard;
