import { useState } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import SelectLimit from "../components/SelectLimit";
import AddModal from "../components/AddModal"
import { getBooks, getLength } from "../api";

const DataBuku = () => {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const [search, setSearch] = useState('')

    let totalPage = Math.ceil(getLength() / limit)

    let pageNo
    if (page <= totalPage) {
        pageNo = page
    } else {
        setPage(totalPage)
        pageNo = page
    }

    const filteredBooks = getBooks(page, limit)
        .filter((item) => {
            const searchTerm = search.toLowerCase()
            return (
                searchTerm === '' ||
                item.judul.toLowerCase().includes(searchTerm) ||
                item.penerbit.toLowerCase().includes(searchTerm) ||
                item.tahun_terbit.toString().includes(searchTerm)
            )
        })

    function handlePageChange(value) {
        if (value === "... ") {
            setPage(1)
        } else if (value === "leftArrow") {
            if (page !== 1) {
                setPage(page - 1)
            }
        } else if (value === "rightArrow") {
            if (page !== totalPage) {
                setPage(page + 1)
            }
        } else if (value === " ...") {
            setPage(totalPage)
        } else {
            setPage(value)
        }
    }

    return (
        <div className="book__container">

            <div className="book__flex">
                <h2 className="page__title">Data Buku</h2>
                <AddModal />
            </div>

            <div className="book__content">
                <div className="book__header">
                    <div className="book__limit">
                        <SelectLimit onLimitChange={setLimit} />
                    </div>

                    <div className="book__search">
                        <input type="text" placeholder="Search ..." onChange={(e) => setSearch(e.target.value)} className="search__input" />
                        <i className="ri-search-line search__icon"></i>
                    </div>
                </div>

                <Table books={filteredBooks} />

                <Pagination
                    totalPage={totalPage} page={pageNo} limit={limit} siblings={1}
                    onPageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default DataBuku;