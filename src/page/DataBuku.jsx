import { useState, useEffect } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import SelectLimit from "../components/SelectLimit";
import AddModal from "../components/AddModal"
import { getBooks, getLength } from "../api";

const DataBuku = () => {
    const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [search, setSearch] = useState("")

  const filteredBooks = getBooks(currentPage, limit, search)

  let totalPage = Math.ceil(getLength(search) / limit)
  console.log(totalPage)
  

  //coba hapus untuk mengetahui fungsinya
  //auto mengubah page jika user mengganti limit yang halamannya tidak ada, 
  useEffect(()=> {
     let pageNo
    if (currentPage <= totalPage) {
      pageNo = currentPage
    } else {
      setCurrentPage(totalPage)
    }
  },[limit])

  //coba hapus untuk mengetahui fungsinya
  //agar kembali ke halaman pertama saat user melakukan search
  useEffect(()=> {
    if(search.length > 0){
      setCurrentPage(1)
    }
  },[search])


  function handlePageChange(value) {
    if (value === "... ") {
      setCurrentPage(1)
    } else if (value === "leftArrow") {
      if (currentPage !== 1) {
        setCurrentPage(page - 1)
      }
    } else if (value === "rightArrow") {
      if (currentPage !== totalPage) {
        setCurrentPage(page + 1)
      }
    } else if (value === " ...") {
      setCurrentPage(totalPage)
    } else {
      setCurrentPage(value)
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
                    totalPage={totalPage} currentPage={currentPage} limit={limit} siblings={1}
                    onPageChange={handlePageChange} dataLength={getLength(search)} />
            </div>
        </div>
    );
}

export default DataBuku;