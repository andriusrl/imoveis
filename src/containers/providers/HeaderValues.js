import React, { useState } from "react";

export const HeaderContext = React.createContext({});

export const HeaderProvider = (props) => {
    const [headerValues, setHeaderValues] = useState({
        filterSwitch: false,
    })

    return (
        <HeaderContext.Provider value={{ headerValues, setHeaderValues }}>
            {props.children}
        </HeaderContext.Provider>
    )
}

export const HeaderValues = () => React.useContext(HeaderContext)