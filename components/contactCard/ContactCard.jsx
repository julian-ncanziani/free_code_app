import styles from './ContactCard.module.css';
import { useState, useEffect } from 'react';
//componentes
import DeleteCardModal from '../deleteCard/DeleteCardModal';
//react icons
import { BsFillTrashFill, BsFillPenFill} from 'react-icons/bs'

export default function ContactCard({contact}){

    const [isOpenModal, setIsOpenModal] = useState(false);
    

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
            <BsFillPenFill/>
            <BsFillTrashFill className={styles.svgDelete} onClick={(e)=>setIsOpenModal(true)}/>
        </span>
        <DeleteCardModal 
            isOpen={isOpenModal} 
            setIsOpenModal={setIsOpenModal} 
            contactId={contact.id}
            />
    </div>)
};
