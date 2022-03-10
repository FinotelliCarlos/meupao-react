import React from "react";

export const PageContext = React.createContext({});

export const ContextProvider = (props) => {
    const user = {name : 'Carlos'};

    return(
        <PageContext.Provider value={{user}}>
            {props.children}
        </PageContext.Provider>
    )
};

export const useProvider = () => React.useContext(PageContext);