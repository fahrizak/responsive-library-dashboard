import "../page/css/DataBuku.css"


const SelectLimit = (props) => {
    return (
        <div className="select__limit">
            <span className="pagi-none">Tampilkan </span>
        <select onChange={(e) => props.onLimitChange(e.target.value)} className="change__limit">
            <option value="5">5 Data</option>
            <option value="10">10 Data</option>
            <option value="15">15 Data</option>
        </select>
        </div>
    );
}

export default SelectLimit;