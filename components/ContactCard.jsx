import styles from './ContactCard.module.css';
import { useState } from 'react';
//componentes
import DeleteCardModal from './DeleteCardModal';
//react icons
import {BsFillPersonLinesFill, BsFillTrashFill, BsFillPenFill} from 'react-icons/bs'

export default function ContactCard({contact}){

    const [isOpenModal, setIsOpenModal] = useState(false);

    function deleteContact(){
        setIsOpenModal(true);

    };

    return(<div className={styles.cardContact}> 
        <div>
            <p className={styles.cardContactTitle}>{contact.name} {contact.lastName}</p>
            <span className={styles.cardContactDetails}>
                <table>
                    <tr>
                        <td>Edad:</td>
                        <td>{contact.age}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        {contact.address ? <td>{contact.address}</td>: <td>-</td>}
                    </tr>
                </table>
            </span>
        </div>
        <span className={styles.span}>
            <BsFillPenFill/>
            <BsFillTrashFill className={styles.svgDelete} onClick={(e)=>deleteContact(e)}/>
        </span>
        <DeleteCardModal isOpen={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>)
};
