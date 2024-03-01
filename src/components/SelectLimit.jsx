import { useState } from "react";
import "../page/css/DataBuku.css"


const SelectLimit = (props) => {
    const [showMenu, SetShowMenu] = useState('');

    const toggleClass = () => {
        SetShowMenu(showMenu === '' ? 'show-limit' : '');
    };

    return (
        <div className="select__limit">
            <span className="pagi-none">Tampilkan </span>

        {/* <select onChange={(e) => props.onLimitChange(e.target.value)} className="change__limit">
            <option value="5">5 Data</option>
            <option value="10">10 Data</option>
            <option value="15">15 Data</option>
        </select> */}

        <div onClick={toggleClass} className={`dropdown__tampil`}>
            <div className="data__tampil">
                {props.limit} Data
                <i className="ri-arrow-down-s-line"></i>
            </div>

            <div className={`${showMenu} select__data`}>
                <div onClick={()=>props.onLimitChange(5)} className="select__item">5 Data</div>
                <div onClick={()=>props.onLimitChange(10)} className="select__item">10 Data</div>
                <div onClick={()=>props.onLimitChange(15)} className="select__item">15 Data</div>
            </div>
        </div>

        </div>
    );
}

export default SelectLimit;