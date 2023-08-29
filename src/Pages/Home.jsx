import React from 'react'
import './Home.css'
import bg1 from '../videoImage/bg1.mp4'
import bg2 from '../videoImage/bgv1.mp4'
import logo from '../videoImage/logo.png'
import pic1 from '../videoImage/pic1.png'
import pic2 from '../videoImage/pic2.png'

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
            <div className="section2Mid">
                <div className="sec2Head">
                    <div className="head1">Our Team</div>
                    <div className="head2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati dicta illo facere amet quos laudantium nesciunt! Officia dolor quod vero.</div>
                </div>
                <div className="sec2Mid1">
                    <img src={pic1} alt="" />
                    <div className="boxes1">
                        <div className="part1"><span>ALEX MONIET</span></div>
                        <div className="part2"><span>Programming Manger</span></div>
                        <div className="part3"><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptas illum nesciunt velit sit id distinctio officia!</span></div>
                    </div>

                </div>
                <div className="sec2Mid2">
                    <div className="boxes2">
                        <div className="part1"><span>ALEX MONIET</span></div>
                        <div className="part2"><span>Programming Manger</span></div>
                        <div className="part3"><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptas illum nesciunt velit sit id distinctio officia!</span></div>

                    </div>
                    <img src={pic2} alt="" />
                </div>
            </div>
            <div className="section3Mid">
                <video style={{width:'100%'}} className='bgVideo2' muted autoPlay loop>
                    <source src={bg2} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default Home