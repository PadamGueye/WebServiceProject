import './Modal.css';
const Modal =()=>{
    return(
        <div className="modal-overlay" key="message-modal-overlay">
            <div class="modal" id="message-modal">
                <h3 class="modal-header" >Send Patient Image</h3>
                <form method="post" action="" id="message-form">
                    <input type="text" placeholder="name of peer..." name="typeMessage" id="typeMessage" required/><br/>
                    <input type="text" placeholder="@ peer ..." name="contenuMessage" id="contenuMessage" required /><br/>
                    <div class="modal-buttons">
                        <input type="submit" name="submitMessage" value="Ajouter" />
                        <button type="reset" id="close-message-modal" class="modal-close">Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Modal;