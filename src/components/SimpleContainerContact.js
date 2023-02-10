import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import './Components.css';
import PhotoCarousel from './PhotoCarousel';
import ContactForm from './ContactForm';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" >
        <div>
            <div className="homeHeader">Contact &nbsp;me!</div>
            <div className='homeSubheader'>__________________________<br/>
            </div>
            <div className='homeContent'>
                &#128241; Phone<br/>
                (+358) 40 049 2925<br/><br/>
                &#128231; Email:<br/>
                tormalauri9@gmail.com<br/><br/>
                You can also find me in social media:<br/>
            </div>
            <div className='links'>
              <a className='link' href="https://www.linkedin.com/in/lauri-torma/"  target="_blank"> &#129309; linkedin</a>
            </div>
                
            
            
        </div>
       

      </Container>
    </React.Fragment>
  );
}