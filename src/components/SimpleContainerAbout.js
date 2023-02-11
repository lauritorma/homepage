import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import './Components.css';
import PhotoCarousel from './PhotoCarousel';

export default function SimpleContainerAbout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" >
        <div>
            <div className="homeHeader">About</div>
            <div className='homeSubheader'>__________________________<br/><br/>
            </div>
            <div className='homeContent'>
            
            </div>
        </div>
       

      </Container>
    </React.Fragment>
  );
}