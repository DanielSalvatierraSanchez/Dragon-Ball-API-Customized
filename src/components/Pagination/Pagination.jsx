import "./Pagination.css";
import React from "react";
import PaginationButton from "../PaginationButton/PaginationButton";

const Pagination = ({ page, lastPage, dispatch }) => {
    return (
        <div className='pagination'>
            <PaginationButton
                className='first-page'
                disabled={page === 1}
                fnc={() => dispatch({ type: "GO_TO_FIRST_PAGE" })}
                text='<< Primera página'
            />
            <PaginationButton className='btn-previous' disabled={page === 1} fnc={() => dispatch({ type: "PREVIOUS_PAGE" })} text='< Anterior' />
            <p className='page-number'>{page}</p>
            <PaginationButton className='btn-next' disabled={page === lastPage} fnc={() => dispatch({ type: "NEXT_PAGE" })} text='Siguiente >' />
            <PaginationButton
                className='last-page'
                disabled={page === lastPage}
                fnc={() => dispatch({ type: "GO_TO_LAST_PAGE" })}
                text='Ultima página >>'
            />
        </div>
    );
};

export default Pagination;
