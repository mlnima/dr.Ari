import React, {useEffect, useState, useContext} from 'react';
import Router from "./Router";
import './Main.scss';


const Main = props => {
    const [state, setState] = useState({});
    useEffect(() => {
    }, []);
    return (
        <main className='Main'>
            <Router/>
        </main>
    );
};
export default Main;