import React, {useEffect, useState, useContext} from 'react';
import './Footer.scss';

const Footer = props => {
    const [state, setState] = useState({});
    useEffect(() => {
    }, []);
    return (
        <footer className='Footer'>

                <span>©HAUSARTZTPRAXIS</span>
        </footer>
    );
};
export default Footer;