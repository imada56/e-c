import React from 'react'
import ReactPaginate from 'react-paginate'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
function Pagination() {
  return (
    <div className='   text-xs  '>
         <ReactPaginate
        breakLabel={<span className='mr-4'>...</span>}
        nextLabel={<span className='w-5 h-5 md:h-8 md:w-8 border-2 flex items-center justify-center rounded-md bg-gray-200  '>
            <FaChevronRight/>
        </span>}
       // onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={555}
        previousLabel={<span className='w-5 h-5 md:h-8 md:w-8 border-2 flex items-center justify-center rounded-md bg-gray-200  '>
        <FaChevronLeft/>
    </span>}
       // renderOnZeroPageCount={null}
       containerClassName='flex items-center justify-center gap-2  mt-8 mb-4 '
       pageClassName=' rounded-md border-solid h-5 w-5 md:h-8 md:w-8  flex items-center justify-center hover:bg-gray-200  '
       activeClassName='bg-purple-500 text-white'
      />
      
    </div>
  )
}

export default Pagination