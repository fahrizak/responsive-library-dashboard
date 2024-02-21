import "../page/css/DataBuku.css"

import { returnpaginationRange } from "../utils/appUtils";

const Pagination = ({totalPage, onPageChange, limit, currentPage, siblings, dataLength}) => {
    let array = returnpaginationRange(totalPage, currentPage, siblings)
    return (
        <div className="table__footer">
        <div className="tampilkan pagi-none">
            Menampilkan {((currentPage - 1) * limit) + 1} - 
            {" " +

            (currentPage * limit)
            
            +" "} data dari 
            {" " + dataLength} data
        </div>

        <ul className="pagination">
            <span className="pagi-none" onClick={()=>(onPageChange("leftArrow"))}>Sebelumnya</span>
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
            <span className="pagi-none" onClick={()=>(onPageChange("rightArrow"))}>Selanjutnya</span>
        </ul>
        </div>
    );
}

export default Pagination;