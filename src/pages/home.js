import React from 'react';
import '../styling/home.css'

const Home = () => {
    return (
        <div className="home-container">
            <p className="subtitle">Experience the magic of modern web design</p>
            <div className="glow"></div>
            <div className="neon-grid">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
            </div>
        </div>
    );
}

export default Home;
