import { useState } from "react";
import "../page/css/DataBuku.css"


const UpdateModal = () => {
        const [modal, setModal] = useState(false);

        const toggleModal = () => {
            setModal(!modal);
        };
    
    
        return (
            <>
                <div onClick={toggleModal} className="tambah__btn">
                <i className="ri-add-box-line"></i>
                    Tambah Buku
                </div>

    
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
    
                        <div className="modal__content form__modal">
                            <h2 className="modal__edit-title">Tambah Data Buku</h2>
                            
                            <div className="form__edit">
                                <form action="">
                                    <label id="judul">Judul Buku <span>*</span></label>
                                    <input type="text" htmlFor="judul" />

                                    <label id="penerbit">Penerbit <span>*</span></label>
                                    <input type="text" htmlFor="penerbit" />
                                    
                                    <label id="tahun">Tahun Terbit <span>*</span></label>
                                    <input type="text" htmlFor="tahun" />
                                    
                                </form>
                            </div>
    
                            <div className="modal__edit-button form-button">
                                <div onClick={toggleModal}className="modal__delete-no form__batalkan">Batalkan</div>
                                <input type="submit" value="Tambah" className="modal__submit form__submit"></input>
                            </div>
                        </div>
                    </div>
                )}
            </>
    
        );
}
 
export default UpdateModal;