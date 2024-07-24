import React, { useContext } from 'react';
import { useFirebase } from '../Firebase/UseFirebase';
//import { ValueConntext } from '../component/Context';

interface PaginationComponentProps {
  Data?: any[]; // Make Data optional with `?` and provide a default value if not supplied
  itemsPerPage?: number;
  onPageChange: (pageNumber: number) => void;
  pageCount?:number
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  Data = [], // Provide an empty array as the default value
  itemsPerPage = 10,
  onPageChange
}) => {
  const prudact = useFirebase();
  
  // Guard against undefined Data
  if (!Data) {
    return null; // Or handle the case where Data is undefined
  }

  const pageCount = Math.ceil(Data.length / itemsPerPage);
  //const { data, onChange } = useContext(ValueConntext);

  // Function to calculate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  // Function to handle click on page number
  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  // Render the pagination controls
  return (
    <div className="pagination-container">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number - 1)}
          className="page-item"
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default PaginationComponent;
