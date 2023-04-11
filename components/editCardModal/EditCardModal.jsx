import Modal from 'react-modal';
import styles from './EditCardModal.module.css';
import {useState } from 'react';
import { db } from '@/server/firebase';
import { doc, setDoc} from 'firebase/firestore';
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

export default function EditCardModal({setEditModal, editModal, contact}){
  
    console.log(contact);
    const router = useRouter();
    const [data, setData] = useState({
      name: contact.name,
      lastName: contact.lastName,
      age: contact.age,
      address: contact.address
    });

    const [showInput, setShowInput] = useState({
      name: false,
      lastName: false,
      age: false,
      address: false
    });

    function activateInput(event){
      setShowInput({
        ...showInput, [event.target.id]: true
      });
    };

    function desactivateInput(event){
      setShowInput({
        ...showInput, [event.target.id]: false
      });
    };

    function handleInput(event){
      setData({
        ...data, [event.target.id]: event.target.value
      });
    };

    function onCloseModal(){
      setData({
        name: contact.name,
        lastName: contact.lastName,
        age: contact.age,
        address: contact.address
      });
      setEditModal(false);
    };

    async function handleSave(){
      try {
        const docRef = await doc(db, 'contacts', contact.id);
        await setDoc(docRef, {...data}, {merge: true});
        setEditModal(false);
        router.reload();
      } catch (error) {
        console.log(error);
      }
      
    };

    return(<Modal
      isOpen={editModal}
      onRequestClose={setEditModal}
      style={customStyles}>
        <div>
          <div className={styles.editModal}>
            <h2>Edit Data</h2>
            <table>
              <tbody>
                <tr>
                  {!showInput.name ? 
                  <>
                  <td>
                    {data.name}
                  </td> 
                  <td>
                    <button className={styles.editBtn} id='name' onClick={(e)=>activateInput(e)}>edit</button>
                  </td>
                  </>: 
                  <><td>
                      <input id='name' onChange={(e)=> handleInput(e)}/>
                    </td>
                    <td>
                      <button id='name' onClick={(e)=> desactivateInput(e)} className={styles.editBtn}>Ok</button>
                    </td>
                  </>
                  }
                </tr>
                <tr>
                  {!showInput.lastName ?<>
                  <td>
                    {data.lastName}
                  </td>
                  <td>
                    <button className={styles.editBtn} id='lastName' onClick={((e)=>activateInput(e))}>edit</button>
                  </td></>
                  :<>
                  <td>
                      <input id='lastName' onChange={(e)=> handleInput(e)}/>
                    </td>
                    <td>
                      <button id='lastName' onClick={(e)=> desactivateInput(e)} className={styles.editBtn}>Ok</button>
                    </td>
                  </>}
                </tr>
                <tr>
                  {!showInput.age ? <>
                    <td>
                  {data.age}
                  </td>
                  <td>
                    <button className={styles.editBtn} id='age' onClick={((e)=>activateInput(e))}>edit</button>
                  </td>
                  </>:
                  <>
                  <td>
                      <input id='age' onChange={(e)=> handleInput(e)}/>
                    </td>
                    <td>
                      <button id='age' onClick={(e)=> desactivateInput(e)} className={styles.editBtn}>Ok</button>
                    </td>
                  </>}
                </tr>
                <tr>
                  {!showInput.address ? <>
                  <td>
                    {data.address}
                  </td>
                  <td>
                    <button className={styles.editBtn} id='address' onClick={((e)=>activateInput(e))}>edit</button>
                  </td>
                  </>
                  : <>
                  <td>
                      <input id='address' onChange={(e)=> handleInput(e)}/>
                    </td>
                    <td>
                      <button id='address' onClick={(e)=> desactivateInput(e)} className={styles.editBtn}>Ok</button>
                    </td>
                  </>}
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button onClick={(e)=>onCloseModal()} className={styles.modalBtn}>Close without Save</button>
            <button className={styles.modalBtn} onClick={(e)=>handleSave()}>Save Changes</button>
          </div>
        </div>
    </Modal>);
};