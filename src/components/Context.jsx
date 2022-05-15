import { useState, createContext } from "react";

const Context = createContext()

const ContextProvider = (props) => {
    const [selectRating, setSelectRating] = useState([])

    return (
        <Context.Provider value={{selectRating, setSelectRating}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}