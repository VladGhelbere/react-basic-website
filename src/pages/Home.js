import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Vlad's Pizzeria</h1>
                <p>We make it, you eat it.
                    As simple as that</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
