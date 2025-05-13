import "./Pagination.css";
import React from "react";

const Pagination = ({ page, lastPage, dispatch }) => {
    return (
        <div className='pagination'>
            <button className='first-page' disabled={page === 1} onClick={() => dispatch({ type: "FIRST_PAGE" })}>
                {"<<"} Primera página
            </button>
            <button
                className='btn-previous'
                disabled={page === 1}
                onClick={() => {
                    dispatch({ type: "PREVIOUS_PAGE" });
                }}
            >
                {"<"} Anterior
            </button>
            <p className='page-number'>{page}</p>
            <button
                className='btn-next'
                disabled={page === lastPage}
                onClick={() => {
                    dispatch({ type: "NEXT_PAGE" });
                }}
            >
                Siguiente {">"}
            </button>
            <button
                className='last-page'
                disabled={page === lastPage}
                onClick={() => {
                    dispatch({ type: "GO_TO_LAST_PAGE" });
                }}
            >
                Ultima página {">>"}
            </button>
        </div>
    );
};

export default Pagination;
