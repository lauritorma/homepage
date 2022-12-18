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
                Phone:<br/>
                (+358)400492925<br/><br/>
                Email:<br/>
                tormalauri9@gmail.com<br/><br/>
                You can also find me in social media,<br/> or contact me through the form below!<br/>
                
            </div>
            
        </div>
       

      </Container>
    </React.Fragment>
  );
}