import React from 'react';

function Pagination({ employeesPerPage, totalEmployees, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
            className="page-link"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)}
            className="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
