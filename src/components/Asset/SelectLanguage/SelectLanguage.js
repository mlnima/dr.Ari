import React, {useEffect, useState, useContext} from 'react';
import {AppContext} from "../../../context/AppContext";
import './SelectLanguage.scss'
const SelectLanguage = props => {
    let contextData = useContext(AppContext);
    const [state, setState] = useState({});
    useEffect(() => {
    }, []);

    const onSelectHandler = e => {
        contextData.setState({
            ...contextData.state,
            language: e.target.value
        })
    };

    return (
        <div className={'SelectLanguage ' + props.propsClass} >
            <select defaultValue={contextData.state.language} onChange={e => onSelectHandler(e)}>
                <option value='de'>DE</option>
                <option value='en'>EN</option>
                <option value='fa'>فا</option>
            </select>

        </div>
    );
};
export default SelectLanguage;