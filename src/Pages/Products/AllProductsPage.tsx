import React from 'react';
// import AllCategory from '../../component/Products/AllCategory';
// import NmbrProduitSearch from '../../component/Uitily/NmbrProduitSearch';
import ContinerProductCard from '../../component/Products/ContinerProductCard';
import PaginationComponent from '../PaginationComponent';
import AllCategory from '../../component/Products/AllCategory';
import NmbrProduitSearch from '../../component/Uitily/NmbrProduitSearch';

// Define props interfaces
interface AllProductsPageProps {
  Data: any[]; // Adjust type as per your actual data structure
  itemsPerPage: number;
  pageCount: number;
  onPageChange: (pageNumber: number) => void;
  categorie: any; // Adjust type as per your actual data structure
  currentItems: any[]; // Adjust type as per your actual data structure
  tb: any; // Adjust type as per your actual data structure
  fct: (cat: any) => void; // Adjust type as per your actual function signature
}

const AllProductsPage: React.FC<AllProductsPageProps> = ({
  Data,
  itemsPerPage,
  pageCount,
  onPageChange,
  categorie,
  currentItems,
  tb,
  fct
}) => {
  const onFilter = (cat: any) => {
    fct(cat);
  };

  return (
    <div className='min-h-screen mt-[140px] '>
      <AllCategory categorie={categorie} fct={onFilter} />
      <NmbrProduitSearch />
      <div className='m-5 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 grid-flow-row-dense'>
        <div className='sm:col-span-2 md:col-span-4 lg:col-span-6'>
          <ContinerProductCard tb={currentItems} Produits={''} Ajouter={''} y={true} />
        </div>
        <div className='text-center'>
          <p className='font-medium'>Catégorie </p>
          <input type='checkbox' value='category1' /> Category 1
          <br />
          <input type='checkbox' value='category2' /> Category 2
          <br />
          <input type='checkbox' value='category3' /> Category 3
          <br />
          <p className='font-medium'>Marque</p>
          <input type='checkbox' value='brand1' /> Brand 1
          <br />
          <input type='checkbox' value='brand2' /> Brand 2
          <br />
          <input type='checkbox' value='brand3' /> Brand 3
          <br />
          <p className='font-medium'>Prix </p>
          <input type='checkbox' value='price1' /> Price 1
          <br />
          <input type='checkbox' value='price2' /> Price 2
          <br />
          <input type='checkbox' value='price3' /> Price 3
          <br />
        </div>
      </div>
      <PaginationComponent
        Data={Data}
        itemsPerPage={itemsPerPage}
        pageCount={pageCount}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default AllProductsPage;
