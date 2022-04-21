import React from 'react';
import css from "./Paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, half = 5}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let p = Math.max(currentPage - half, 1); p <= Math.max(1, Math.min(currentPage + half, pagesCount)); p++) {
    pages.push(p);
  }

  return (
    <div className={css.pageLinks}>
      {currentPage > half + 1
        ? <>
            <span
              className={css.pageNumber}
              onClick={(e) => {onPageChange(1)}}>
              {"|◄"}
            </span>
            <span>{"..."}</span>
          </>
        : ""
      }
      {pages.map( p => {
        return (
          <span
            className={`${css.pageNumber} ${currentPage === p && css.selected}`}
            onClick={(e) => {onPageChange(p)}}
            key={p}>
            {p}
          </span>
        )
      })}
      {currentPage < pagesCount - half
        ? <>
            <span>{"..."}</span>
            <span
              className={css.pageNumber}
              onClick={(e) => {onPageChange(pagesCount)}}>
              {"►|"}
            </span>
          </>
        : ""
      }
    </div>
  )
}

export default Paginator;
