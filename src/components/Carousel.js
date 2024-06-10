import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS for the carousel

const ImageCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
                <img src="/path/to/your/image1.jpg" alt="Image 1" />
                <p className="legend">Image 1</p>
            </div>
            <div>
                <img src="/path/to/your/image2.jpg" alt="Image 2" />
                <p className="legend">Image 2</p>
            </div>
            <div>
                <img src="/path/to/your/image3.jpg" alt="Image 3" />
                <p className="legend">Image 3</p>
            </div>
        </Carousel>
    );
};

export default ImageCarousel;
