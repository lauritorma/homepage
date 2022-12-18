import * as react from 'react'
import React from 'react';
import SimpleContainer from './SimpleContainerHome';
import bgImage from './images/green-leaves-background.jpg'


export default function Home () {

    return (
        <div >
            <div className='backdrop'>
                <SimpleContainer></SimpleContainer>
            </div>
        </div>
    );
}