import React, {useEffect, useState, useContext} from 'react';
import Nav from "../Nav/Nav";
import './Header.scss'
import {AppContext} from "../../context/AppContext";
import Logo from "../Asset/Logo/Logo";
import SelectLanguage from "../Asset/SelectLanguage/SelectLanguage";

const Header = props => {
    let contextData = useContext(AppContext);
    const [state, setState] = useState({});
    useEffect(() => {
    }, []);

    const onBarsClickHandler = ()=>{
        contextData.menus.navigation ?
            contextData.setMenus({
                ...contextData.menus,
                navigation: false
            }) :
            contextData.setMenus({
                ...contextData.menus,
                navigation: true
            })
    }

    return (
        <header className='Header'>
<Logo/>
            <SelectLanguage propsClass='NavItem'/>
            <button className='fas fa-bars NavigationMobileBtn' onClick={()=>onBarsClickHandler()}/>


            <Nav/>
        </header>
    );
};
export default Header;