import React, { Component } from "react";
import "./pagination.css";
import next from "./svg/next.svg";
import prev from "./svg/prev.svg";

class Pagination extends Component {
  render() {
    const { perPage, total, paginate, currentPage } = this.props;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / per_page); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item`}>
              <button
                onClick={() => paginate(number)}
                className={`page-link ${
                  currentPage === number ? "selected" : ""
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <p>
          Página {currentPage} do total de {Math.ceil(total / perPage)} página
          (s)
        </p>
      </nav>
    );
  }
}
export default Pagination;
