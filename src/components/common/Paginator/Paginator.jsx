import React from 'react';
import css from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  let quant = 7;
  for (let p = Math.max(currentPage - quant, 1); p <= Math.max(1, Math.min(currentPage + quant, pagesCount)); p++) {
    pages.push(p);
  }

  return (
    <div className={css.pageLinks}>
      {currentPage > quant + 1
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
      {currentPage < pagesCount - quant
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
