import React from 'react';
import './Hero.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {

    const settings = {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        dots: true,
    };

    return (
        <div className='slider'>
            <Slider {...settings}>
                <div className='slide'>
                    <img
                        src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1626169964_544546a207964c559d21cbd12c3c68a0.jpeg'
                        alt='slide'/>
                </div>
                <div className='slide'>
                    <img
                        src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1626169964_544546a207964c559d21cbd12c3c68a0.jpeg'
                        alt='slide'/>
                </div>
                <div className='slide'>
                    <img
                        src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1626169964_544546a207964c559d21cbd12c3c68a0.jpeg'
                        alt='slide'/>
                </div>
                <div className='slide'>
                    <img
                        src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1626169964_544546a207964c559d21cbd12c3c68a0.jpeg'
                        alt='slide'/>
                </div>
                <div className='slide'>
                    <img
                        src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1626169964_544546a207964c559d21cbd12c3c68a0.jpeg'
                        alt='slide'/>
                </div>
            </Slider>
        </div>
    );
};

export default Hero;
