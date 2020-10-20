import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhoneAlt, faEnvelope, faMapMarked } from '@fortawesome/free-solid-svg-icons'

import './../scss/contacts.scss';

const Contacts = () => {


    return(
        <div className="section" id="contact">
            <h2>Contact me</h2>
            <div className="contacts-container">
                <div><FontAwesomeIcon icon={faUser} /></div>
                <div>
                    <ul>
                        <li><FontAwesomeIcon icon={faPhoneAlt} />  721319979</li>
                        <li><FontAwesomeIcon icon={faEnvelope} />  martin.slaby29@seznam.cz</li>
                        <li><FontAwesomeIcon icon={faMapMarked}/>  Czech Republic, Prague</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contacts;