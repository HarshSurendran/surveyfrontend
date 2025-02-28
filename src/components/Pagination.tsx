import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight 
} from 'lucide-react';
import { IPaginationProps } from '../Interfaces/IProps';



const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
}) => {
      const totalPages = Math.ceil(totalItems / Number(pageSize));

  const getPageNumbers = () => {
      const pages: (number | string)[] = [];      
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="w-full px-2 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

        <div className="flex items-center gap-1">
          <button
        
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="hidden sm:flex"
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>

          <button
           
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1">
            {getPageNumbers().map((page, index) => (
              <React.Fragment key={index}>
                {page === '...' ? (
                  <span className="px-2 py-1">...</span>
                ) : (
                  <button
                    
                    onClick={() => onPageChange(Number(page))}
                    className={`px-3 py-1 hidden sm:flex ${
                      currentPage === page 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'hover:bg-blue-50'
                    }`}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
          
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <button
           
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="hidden sm:flex"
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
        
        <div className="text-sm text-gray-600 hidden sm:block">
          {totalItems === 0 ? (
            <span>No items</span>
          ) : (
            <span>
              Showing {Math.min((currentPage - 1) * Number(pageSize) + 1, totalItems)} to{' '}
              {Math.min(currentPage * Number(pageSize), totalItems)} of {totalItems} entries
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;