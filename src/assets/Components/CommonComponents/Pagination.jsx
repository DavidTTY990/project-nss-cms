import { useContext } from "react";
import { FunctionContext } from "../../../App";

export default function Pagination({ productsPerPage, length }) {
  const { handleSetCurrentPage, currentPage } = useContext(FunctionContext);
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / productsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="container mt-5">
      <ul className="pagination d-flex justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {paginationNumbers.map((pageNumber) => {
          return (
            <li className="page-item">
              <a
                className={pageNumber === currentPage ? "page-link active" : "page-link"}
                href="#"
                key={pageNumber}
                onClick={() => handleSetCurrentPage(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          );
        })}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
