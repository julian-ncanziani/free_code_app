import Modal from 'react-modal';
import { db } from '@/server/firebase';
import { doc, deleteDoc} from 'firebase/firestore';
import { useRouter } from 'next/router';
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

export default function DeleteCardModal({deleteModal, setDeleteModal, contactId}){

  const router = useRouter();

  async function handleDelete(){
    try {
      await deleteDoc(doc(db, 'contacts', contactId));
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return(<Modal 
    isOpen={deleteModal}
    onRequestClose={setDeleteModal}
    style={customStyles}>   
    <div>
        <p>Desea eliminar el contacto?</p>
        <button onClick={e=>handleDelete()}>Yes</button>
        <button onClick={e=>setDeleteModal(false)}>No</button>
    </div>
  </Modal>)
};