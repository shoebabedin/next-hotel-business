import classnames from "classnames";
import React from "react";
import { DOTS, usePagination } from "./usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];
  
  return (
    <>
      <div className="pagination mb-[80px]">
        <ul
          className={classnames(
            "pagination-container flex items-center justify-end gap-4 mt-8",
            { [className]: className }
          )}
        >
          <li
            className={classnames("pagination-item rounded-full border text-sm w-6 lg:w-11 h-6 lg:h-11 text-[#151515] flex items-center justify-center cursor-pointer", {
              disabled: currentPage === 1,
            })}
            onClick={onPrevious}
          >
            <div className="arrow left" />
          </li>
          {paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return <li key={pageNumber.id} className="pagination-item dots">&#8230;</li>;
            }

            return (
              <li key={pageNumber.id}
                className={classnames(
                  "pagination-item rounded-full border text-sm w-6 lg:w-11 h-6 lg:h-11 text-[#151515] flex items-center justify-center cursor-pointer",
                  {
                    selected: pageNumber === currentPage,
                  }
                )}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
          <li
            className={classnames("pagination-item rounded-full border text-sm w-6 lg:w-11 h-6 lg:h-11 text-[#151515] flex items-center justify-center cursor-pointer", {
              disabled: currentPage === lastPage,
            })}
            onClick={onNext}
          >
            <div className="arrow right" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
