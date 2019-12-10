import React, {useEffect, useState, useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AppContext} from "../../context/AppContext";
import {Translate} from "react-translated";
import './Nav.scss'
import SelectLanguage from "../Asset/SelectLanguage/SelectLanguage";

const Nav = props => {
    let contextData = useContext(AppContext);
    const [state, setState] = useState({});
    useEffect(() => {
    }, []);

    const DoctorsMenu = () => {
        if (contextData.menus.doctors) {
            return (
                <React.Fragment>
                    <NavLink to='/Kontakt'><Translate text='Reza Ari-Steinweg'/></NavLink>
                </React.Fragment>
            )
        } else return null
    };

    const onDoctorsClickHandler = () => {
        contextData.menus.doctors ?
            contextData.setMenus({
                ...contextData.menus,
                doctors: false
            }) :
            contextData.setMenus({
                ...contextData.menus,
                doctors: true
            })
    };

    if (contextData.menus.navigation) {
        return (
            <nav className='Nav'>

                <NavLink to={'/'} className='fas fa-home NavItem'> <Translate text='Zuhause'/></NavLink>
                <button onClick={() => onDoctorsClickHandler()} className='fas fa-user-md NavItem'> <Translate text='Praxis'/></button>

                <DoctorsMenu/>

                {/*<NavLink to={'/Leistungen'} className='NavItem'><Translate text='Leistungen'/></NavLink>*/}

                <NavLink to={'/Kontakt'} className='fas fa-phone-volume NavItem'><Translate text='Kontakt'/></NavLink>


            </nav>
        );
    } else return null


};
export default Nav;