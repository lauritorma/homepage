import React from 'react';
import ReactImagesCarousel from 'react-images-carousel';
import kuva1 from './images/kuva.png';

export default function PhotoCarousel() {

    const sliderData = [
        `url(${kuva1})`, 
        "https://images.unsplash.com/photo-1504610926078-a1611febcad3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750", 
        "https://images.unsplash.com/photo-1419225692236-28f3211d7038?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750",
        "https://images.unsplash.com/photo-1515446870326-c532f9a8d954?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750", 
        "https://images.unsplash.com/photo-1545091741-2231068f3478?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixlib=rb-1.2.1&q=80&w=750",    
    ];

    return (
    <div className='photoCarousel'>
        <ReactImagesCarousel images={sliderData} sliderBg="#000000" paginationBg="#000000"/>
    </div>
    )
}