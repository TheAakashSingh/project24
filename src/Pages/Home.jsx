import React from 'react'
import bg1 from '../videoImage/bg1.mp4'
import logo from '../videoImage/logo.png'
import './Home.css'
const Home = () => {
    return (
        <div className='home' >
            <div className="sectionTop">
                <video className='bgVideo' muted autoPlay loop>
                    <source src={bg1} type='video/mp4' />
                </video>
                <div className="mainBox">

                    <div className="container">
                        <div className="left">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="navElements">
                            <ul>
                                <li>PAGE 1</li>
                                <li>PAGE 2</li>
                                <li>PAGE 3</li>
                                <li>PAGE 4</li>
                                <li>PAGE 5</li>
                                <li>PAGE 6</li>
                            </ul>
                            <button>Button 1</button>
                        </div>
                    </div>
                    <div className="containers2">
                        <span className="heading1">LOREM, IPSUM</span>
                        <span className="heading2">Enter Your date here</span>
                        <button>Button 2</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home