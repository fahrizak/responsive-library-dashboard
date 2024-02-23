import "../page/css/DataBuku.css"


import { useState } from "react";

const UpdateModal = () => {
    const [modal, setModal] = useState(false);

    const [judul, setJudul] = useState("")
    const [penerbit, setPenerbit] = useState("")
    const [tahun, setTahun] = useState("")

    const toggleModal = () => {
        setModal(!modal);
    };

    const isFormValid = () => {
        return (
            judul !== '' &&
            penerbit !== '' &&
            tahun !== ''
        );
    };

    const handleSubmit = (e) => {
        if (isFormValid()) {
            console.log('selamat anda berhasil')
        } else {
            e.preventDefault()
        }
    }



    return (
        <>
            <i onClick={toggleModal} className="ri-edit-2-line btn__edit"></i>


            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>

                    <div className="modal__content form__modal">
                        <h2 className="modal__edit-title">Edit Data Buku</h2>

                        <div className="form__edit">
                            <form onSubmit={handleSubmit}>
                                <label id="judul">Judul Buku <span>*</span></label>
                                <input type="text" htmlFor="judul"
                                    value={judul}
                                    onChange={(e) => setJudul(e.target.value)} />

                                <label id="penerbit">Penerbit <span>*</span></label>
                                <input type="text" htmlFor="penerbit"
                                    value={penerbit}
                                    onChange={(e) => setPenerbit(e.target.value)} />

                                <label id="tahun">Tahun Terbit <span>*</span></label>
                                <input type="text" htmlFor="tahun"
                                    value={tahun}
                                    onChange={(e) => setTahun(e.target.value)} />

                                <div className="modal__edit-button form-button">
                                    <div onClick={toggleModal} className="modal__delete-no form__batalkan">Batalkan</div>
                                    <button type="submit" style={{ backgroundColor: isFormValid() ? '#0270AF' : 'lightgray' }} className="modal__submit form__submit">Edit</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            )}
        </>

    );
}

export default UpdateModal;