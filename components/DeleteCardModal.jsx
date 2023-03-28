import Modal from 'react-modal';


Modal.setAppElement('#__next');

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-60%, -60%)',
    }
  };

export default function DeleteCardModal({isOpen, setIsOpenModal}){

  function handleDelete(){
    setIsOpenModal(false);
  };

  return(<Modal 
    isOpen={isOpen}
    onRequestClose={setIsOpenModal}
    style={customStyles}>   
    <div>
        <p>Desea eliminar el contacto?</p>
        <button onClick={e=>handleDelete(false)}>Yes</button>
        <button onClick={e=>setIsOpenModal(false)}>No</button>
    </div>
  </Modal>)
};