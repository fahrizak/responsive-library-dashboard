import "../page/css/DataBuku.css"

import { returnpaginationRange } from "../utils/appUtils";

const Pagination = (props) => {
    let array = returnpaginationRange(props.totalPage, props.page, props.limit, props.siblings)
    return (
        <div className="table__footer">
        <div className="tampilkan pagi-none">
            Tampilkan x dari x data
        </div>

        <ul className="pagination">
            <span className="pagi-none" onClick={()=>(props.onPageChange("leftArrow"))}>Sebelumnya</span>
            {array.map((value) => {
                if ( value === props.page) {
                    return (
                        <li key={value} onClick={()=>(props.onPageChange(value))} className="active-pagination">{value}</li>
                    )
                } else {
                    return (
                        <li key={value} onClick={()=>(props.onPageChange(value))} >{value}</li>

                    )
                }

            })}
            <span className="pagi-none" onClick={()=>(props.onPageChange("rightArrow"))}>Selanjutnya</span>
        </ul>
        </div>
    );
}

export default Pagination;