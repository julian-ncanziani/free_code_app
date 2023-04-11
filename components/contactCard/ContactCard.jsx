import styles from './ContactCard.module.css';
import { useState, useEffect } from 'react';
//componentes
import DeleteCardModal from '../deleteCard/DeleteCardModal.jsx';
import EditCardModal from '../editCardModal/editCardModal.jsx';
//react icons
import { BsFillTrashFill, BsFillPenFill} from 'react-icons/bs'

export default function ContactCard({contact}){

    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    

    function editModalHandle(){
        console.log('edit modal');
    }
    return(<div className={styles.cardContact}> 
        <div>
            <p className={styles.cardContactTitle}>{contact.name} {contact.lastName}</p>
            <span className={styles.cardContactDetails}>
                <table>
                    <tbody>
                        <tr>
                            <td>Edad:</td>
                            <td>{contact.age}</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            {contact.address ? <td>{contact.address}</td>: <td>-</td>}
                        </tr>
                    </tbody>
                </table>
            </span>
        </div>
        <span className={styles.span}>
            <BsFillPenFill onClick={(e)=>setEditModal(true)}/>
            <BsFillTrashFill className={styles.svgDelete} onClick={(e)=>setDeleteModal(true)}/>
        </span>
        <EditCardModal
            editModal={editModal}
            setEditModal={setEditModal}
            contact={contact}/>
        <DeleteCardModal 
            deleteModal={deleteModal} 
            setDeleteModal={setDeleteModal} 
            contactId={contact.id}
            />
    </div>)
};
