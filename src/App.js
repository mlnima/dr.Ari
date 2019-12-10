import React, {useContext, useEffect} from 'react';
import './App.scss';
import {Provider} from 'react-translated';
import {AppContext} from "./context/AppContext";
import Translation from './components/Translate/Translate'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {withRouter} from "react-router";


const App=(props)=> {
    let contextData = useContext(AppContext);

    useEffect(() => {
        if (contextData.state.language==='fa'){
            document.dir = 'rtl'
        }else {
            document.dir = 'ltr'
        }
    }, [contextData.state.language]);


    useEffect(()=>{
        contextData.setMenus({
            ...contextData.menus,
            navigation: false
        })
    },[ props.location.pathname,contextData.state.language]);

    return (
        <Provider language={contextData.state.language} translation={Translation}>
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </Provider>
    );
};
export default withRouter(App);
