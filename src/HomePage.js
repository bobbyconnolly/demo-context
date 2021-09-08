import React, { useContext } from 'react'
import { Context } from './ContextProvider'
import { ProfileCard } from './ProfileCard'

export const HomePage = () => {
    const { state, setAge } = useContext(Context)

    console.log('ctx', state)

    return (
        <div>
            <ProfileCard age={state.age} />
            <button onClick={() => setAge(state.age + 1)}>Add age</button>
        </div>
    )
}
