import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import "../page/css/DataBuku.css"

const Table = ({books}) => {



    return (
        <table className="book__table">
            <thead>
                <tr>
                    <th>Judul Buku</th>
                    <th>Penerbit</th>
                    <th>Tahun Terbit</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {books
                    .map(((item, i) => (
                        <tr key={i}>
                            <td>{item.judul}</td>
                            <td>{item.penerbit}</td>
                            <td>{item.tahun_terbit}</td>
                            <td className="action">
                                <UpdateModal />
                                <DeleteModal />
                            </td>
                        </tr>
                    )))}
            </tbody>

        </table>
    );
}

export default Table;