import React, {useEffect, useState, useContext, useRef} from 'react';
import './HomePage.scss';
import Wilmersdorfer from '../../../../images/Wilmersdorfer.jpg'
import Contact from "../Contact/Contact";

const HomePage = props => {
    const Homepage = useRef(null)
    const [state, setState] = useState({});
    useEffect(() => {
        // setBackground()
    }, []);

    //
    // const setBackground = () => {
    //     if (window.innerWidth<=768){
    //         Homepage.current.style.backgroundImage = 'url(\'images/berlin-mobile.jpg\')'
    //     }else {
    //         Homepage.current.style.backgroundImage = 'url(\'images/berlin-desktop.jpg\')'
    //     }
    // };

    return (
        <div ref={Homepage} className='HomePage'>
            <img className='Wilmersdorfer' src={Wilmersdorfer} alt="alexa"/>
            <Contact/>
        </div>
    );
};
export default HomePage;