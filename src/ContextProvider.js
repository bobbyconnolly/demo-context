import React, { useState } from 'react'

const initialState = {
    name: 'Bobby',
    age: 37,
}

export const Context = React.createContext(null)

export const ContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState)

    const setAge = (age) => {
        setState((state) => ({ ...state, age }))
    }

    return (
        <Context.Provider value={{ state, setAge }}>
            {children}
        </Context.Provider>
    )
}
