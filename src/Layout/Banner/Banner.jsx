import React from 'react';
import banner from '../../assets/images/banner-video2.webm';
import './Banner.css';

export const Banner = () => {
  return (
    <div className="main-banner">
      <div className="brand">woodland</div>
      <video className="banner-video" autoPlay muted loop playsInline id="video-background">
        <source src={banner} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
