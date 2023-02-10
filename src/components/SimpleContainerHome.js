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
            <div className="homeHeader">Lauri &nbsp;Törmä</div>
            <div className='homeSubheader'>__________________________<br/><br/>
            </div>
            <div className='homeContent'>
            Hi! And welcome to my home page &#128515;<br/><br/>
            I am a 22-year old developer from Helsinki,<br/>
            currently studying software development in <br></br> Haaga-Helia University of Applied Sciences &#128187;<br/><br/><br/>
            Please feel free to explore my portfolio <br></br> and contact me via contact page &#10071;<br/><br/>
            <p style={{color: "gray", fontSize: "20px"}}>(this site is under construction &#128295;)</p>
            </div>
        </div>
       

      </Container>
    </React.Fragment>
  );
}