import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import './Components.css';
import PhotoCarousel from './PhotoCarousel';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" >
        <div>
            <div className="homeHeader">Lauri &nbsp; Törmä</div>
            <div className='homeSubheader'>__________________________<br/>
            Business Information Technology Student</div>
            <div className='homeContent'>
            Hi! And welcome to my home site.<br/><br/>
            My name is Lauri and I'm a 22-year old developer from Helsinki Finland,<br/>
            currently studying software development in Haaga-Helia University of Applied Sciences.<br/><br/>
            Please feel free to explore my portfolio and contact me through contact page!
            </div>
        </div>
       

      </Container>
    </React.Fragment>
  );
}