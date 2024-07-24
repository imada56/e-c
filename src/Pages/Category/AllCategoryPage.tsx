import React, { useState } from 'react';
import { DataCategoryHome } from '../../Data/ProduitData';
import CardCategory from '../../component/Category/CardCategory';
import PaginationComponent from '../../Pages/PaginationComponent';

// Define the type for each category item in DataCategoryHome
interface CategoryItem {
  id: string;
  bg: string;
  imgs: string;
}

interface AllCategoryPageProps {
 
 
  //
  categorie?: string[],
  currentItems?: any[]; // Adjust type as per your actual data structure
  tb?: any; // Adjust type as per your actual data structure
  fct?: (cat: any) => void; // Adjust type as per your actual function signature
  Data: any[]; // Define the type for Data, adjust as per your actual data structure
  itemsPerPage: number;
  pageCount: number;
  onPageChange: (pageNumber: number) => void;
}

const AllCategoryPage: React.FC<AllCategoryPageProps> = ({ Data, itemsPerPage, pageCount, onPageChange }) => {
  const [tableau, setTableau] = useState<CategoryItem[]>(DataCategoryHome);

  return (
    <section className='container min-h-[420px] mt-[140px]'>
      <div className='w-[80%] m-auto mt-20'>
        <div className='mt-3 p-2 border-2 grid items-center gap-2 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {/* Render cards for each item in tableau */}
          {tableau.map((item) => (
            <CardCategory key={item.id} background={item.bg} img={item.imgs} title={`Promotion`} />
          ))}
        </div>
        {/* PaginationComponent with props */}
        <PaginationComponent
          Data={Data} // Pass your data array here
          itemsPerPage={itemsPerPage} // Specify items per page
          pageCount={pageCount} // Specify total number of pages
          onPageChange={onPageChange} // Handler for page change
        />
      </div>
    </section>
  );
}

export default AllCategoryPage;
