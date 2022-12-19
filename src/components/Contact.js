import * as react from 'react'
import React, { useState, useEffect, useRef } from "react";
import bgImage from './images/green-leaves-background.jpg'
import SimpleContainerContact from './SimpleContainerContact';
import ContactForm from "./ContactForm";


export default function Contact () {
    const [entries, setEntries] = useState([]);

    useEffect(() => fetchEntries(), []);

    const fetchEntries = () => {
        fetch('https://contact-list.herokuapp.com/api/contactses')
            .then(response => response.json())
            .then(data => setEntries(data._embedded.contactses))

    };

    const saveEntry = (entry) => {
        fetch('https://contact-list.herokuapp.com/api/contactses', {
            mode: 'no-cors',    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)
        })
            .then(res => fetchEntries())
            .catch(err => console.error(err))
        
    };


    return (
        <div >
            <div className='backdrop'>
                <SimpleContainerContact></SimpleContainerContact>
                <ContactForm saveEntry={saveEntry}/>            
            </div>
        </div>
    );
}