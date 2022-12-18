import * as react from 'react'
import React from 'react';
import SimpleContainerHome from './SimpleContainerHome';
import bgImage from './images/green-leaves-background.jpg'


export default function Home () {

    return (
        <div >
            <div className='backdrop'>
                <SimpleContainerHome></SimpleContainerHome>
            </div>
        </div>
    );
}