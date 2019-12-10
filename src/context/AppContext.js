import React, {useState} from 'react';
export const AppContext = React.createContext();

export const AppProvider = props => {

    const [state, setState] = useState({
        language: 'de',
    });
    const [menus, setMenus] = useState({
        doctors: false,
        navigation:false
    });


    return (
        <React.Fragment>
            <AppContext.Provider value={{state, setState,menus,setMenus}}>
                {props.children}
            </AppContext.Provider>
        </React.Fragment>
    )

};