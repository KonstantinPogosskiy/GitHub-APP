import Repository from "../Repository/Repository";
import React, {useState} from "react";
import {PER_PAGE, PREV_ARROW, NEXT_ARROW} from "../../constants/constants";
import './RepositoryArea.css';
import ReactPaginate from "react-paginate";

const RepositoryArea = (props) => {

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    };

    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(props.repos.length / PER_PAGE);

    return (
        <div className="repositoryArea">
            <h2>Repositories ({props.repos.length})</h2>
            {props.repos.slice(offset, offset + PER_PAGE).map((item) => <Repository repos={item} />)}
                <ReactPaginate
                    previousLabel={PREV_ARROW}
                    nextLabel={NEXT_ARROW}
                    breakLabel={'...'}
                    breakClassName={'break'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
        </div>
    )
}

export default RepositoryArea;