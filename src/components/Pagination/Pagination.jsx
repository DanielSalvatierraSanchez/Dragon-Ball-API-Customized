import "./Pagination.css";
import React from "react";

const Pagination = ({ page, setPage, limit }) => {
    return (
        <div className='pagination'>
            <button className='first-page' disabled={page === 1} onClick={() => setPage(1)}>
                {"<<"} Primera página
            </button>
            <button
                className='btn-previous'
                disabled={page === 1}
                onClick={() => {
                    setPage(page - 1);
                }}
            >
                {"<"} Anterior
            </button>
            <p className='page-number'>{page}</p>
            <button
                className='btn-next'
                disabled={page === limit}
                onClick={() => {
                    setPage(page + 1);
                }}
            >
                Siguiente {">"}
            </button>
            <button className='last-page' disabled={page === limit} onClick={() => setPage(limit)}>
                Ultima página {">>"}
            </button>
        </div>
    );
};

export default Pagination;
