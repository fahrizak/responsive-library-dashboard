import { useState} from "react";
import trash from "../assets/trash.json"
import Lottie from "lottie-react";
import "../page/css/DataBuku.css"


const DeleteModal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };


    return (
        <>
            <i onClick={toggleModal} className="ri-delete-bin-line btn__delete"></i>


            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>

                    <div className="modal__content delete__modal">
                        <Lottie animationData={trash} className="modal__delete-image" />

                        <h2 className="modal__delete-title">Hapus Data "Bumi Manusia"</h2>
                        <p className="modal__delete-description">
                        Apakah anda yakin untuk menghapus data bumi manusia secara permanen  ?    
                        </p>

                        <div className="modal__delete-button delete__button">
                            <div onClick={toggleModal}className="modal__delete-no delete__batalkan">Batalkan</div>
                            <div className="modal__delete-yes delete__hapus">Hapus Data</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DeleteModal;