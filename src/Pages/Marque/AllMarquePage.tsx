import React from 'react';
// import AllMarque from '../../component/Marque/AllMarque';
// import ContinerMarqueCard from '../../component/Marque/ContinerMarqueCard';
import PaginationComponent from '../PaginationComponent';
import AllMarque from '../../component/Marque/AllMarque';
import ContinerMarqueCard from '../../component/Marque/ContinerMarqueCard';

interface AllMarquePageProps {
  Data: any[]; // Adjust type as per your actual data structure
  itemsPerPage: number;
  pageCount: number;
  onPageChange: (pageNumber: number) => void;
  categorie: string[]; // Adjust type as per your actual data structure
  currentItems: any[]; // Adjust type as per your actual data structure
  tb: any; // Adjust type as per your actual data structure
  fct: (cat: string) => void;
}

const AllMarquePage: React.FC<AllMarquePageProps> = ({
  Data,
  itemsPerPage,
  pageCount,
  onPageChange,
  categorie,
  currentItems,
  tb,
  fct,
}) => {
  const onFilter = (cat: string) => {
    fct(cat);
  };

  return (
    <div className='min-h-screen mt-[140px]'>
      <AllMarque categorie={categorie} fct={onFilter} />
      {/* <NmbrProduitSearch/> */}
      <div className='m-5 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 grid-flow-row-dense'>
        <div className='sm:col-span-2 md:col-span-4 lg:col-span-6'>
          <ContinerMarqueCard tb={currentItems} Produits={''} Ajouter={''} y={'ga3'} />
        </div>
      </div>
      <PaginationComponent
        Data={Data}
        itemsPerPage={itemsPerPage}
        pageCount={pageCount}
        onPageChange={onPageChange}
      />
      {/* <Pagination className='mt-72'/> 
    <h1 className='w-[85%]  bg-teal-400'>hbb {data}</h1>  */}
    </div>
  );
};

export default AllMarquePage;
