import "../page/css/DataBuku.css"

import { returnpaginationRange } from "../utils/appUtils";

const Pagination = ({totalPage, onPageChange, limit, currentPage, siblings, dataLength}) => {
    let array = returnpaginationRange(totalPage, currentPage, siblings)

    console.log("data length : "+dataLength)
    console.log("totalPage : "+totalPage)
    console.log("currentPage : "+currentPage)
    console.log("limit: " + limit)




    return (
        <div className="table__footer">
        <div className="tampilkan pagi-none">
            Menampilkan {((currentPage - 1) * limit) + 1} - 
            {` ${ totalPage !== currentPage ?  currentPage * limit : dataLength} `} data dari 
            {" " + dataLength} data
        </div>

        <ul className="pagination">
            <span className="pagi-none" onClick={()=>(onPageChange("leftArrow"))}>Sebelumnya</span>
            <li className="arrow-none" onClick={()=>(onPageChange("leftArrow"))}><i className="ri-arrow-left-s-line"></i></li>
            {array.map((value) => {
                if ( value === currentPage) {
                    return (
                        <li key={value} onClick={()=>(onPageChange(value))} className="active-pagination">{value}</li>
                    )
                } else {
                    return (
                        <li key={value} onClick={()=>(onPageChange(value))} >{value}</li>

                    )
                }
            })}
            <li className="arrow-none" onClick={()=>(onPageChange("rightArrow"))}><i className="ri-arrow-right-s-line"></i></li>
            <span className="pagi-none" onClick={()=>(onPageChange("rightArrow"))}>Selanjutnya</span>
        </ul>
        </div>
    );
}

export default Pagination;