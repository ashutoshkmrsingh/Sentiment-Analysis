import React, { useState } from 'react';
import './contact.css';

import call from '../../assets/call.png';
import gmail from '../../assets/gmail.png';
import linkedin from '../../assets/linkedin.png';

const contact_details = [
    { icon: call, href: "tel: 7991144787", alt: "call" },
    { icon: gmail, href: "mailto: ashu.sistec@gmail.com", alt: "mail" },
    { icon: linkedin, href: "https://linkedin.com/in/ashutoshkmrsingh", alt: "linkedin" },
]; 

const Contact = (props) => {
    // const [contacts, setContacts] = useState( contact_details );

    const contacts = useState( contact_details )[0];
    return(
        <div className='contact'>
            {
                contacts.map((contact, index) => {
                    return <a href={contact.href} key={index}>
                                <img src={contact.icon} alt={contact.alt} className='icon' />
                            </a>
                })
            }
        </div>
    );
}

export default Contact;
