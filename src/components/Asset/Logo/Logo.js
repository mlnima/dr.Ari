import React,{useEffect,useState,useContext} from 'react';
import imageLogo from '../../../images/logo.png';
import {Link} from "react-router-dom";
import './Logo.scss';

const Logo = props => {
    const [state, setState] = useState({
    });
    useEffect(()=>{
    },[]);
    return (
        <Link to='/'>
        <div className='Logo'>
            <img src={imageLogo}/>
            <span>HAUSARTZTPRAXIS</span>
        </div>
        </Link>
    );
};
export default Logo;