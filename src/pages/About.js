import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}>

            </div>
            <div className="aboutBottom">
                <h1> ABOUT US </h1>
                <p>
                    Vlad's pizzeria offers pizza and pizza. We serve pizza with pizza. Sometimes we cook pizzas but our specialties are really pizzas.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac auctor enim, vel rhoncus nulla. 
                    Mauris eu velit nec quam consectetur fermentum. Phasellus ultrices lectus sodales, pulvinar nulla id, sodales enim. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est libero, convallis ut diam sit amet, efficitur lobortis purus. 
                    Donec mattis, nisi nec viverra ultricies, nisi odio hendrerit sem, a sollicitudin leo nisl et odio. 
                    Curabitur nec risus et arcu consequat pulvinar ac et felis. Nullam convallis sem nec ipsum consectetur cursus.
                </p>
            </div>
        </div>
    )
}

export default About
