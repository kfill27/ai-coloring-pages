import React, { useState, useEffect } from 'react';
import image1 from '../Assets/home_carousel1.png';
import image2 from '../Assets/home_carousel2.png';
import image3 from '../Assets/home_carousel3.png';
import image4 from '../Assets/home_carousel4.png';
import image5 from '../Assets/home_carousel5.png';



const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        // Clear interval on component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, [images]);

    return (
        <div>
            <img src={images[currentIndex]} alt={`carousel ${currentIndex}`} style={{ width: '100%', height: 'auto' }} />
        </div>
    );
};

export default ImageCarousel;
