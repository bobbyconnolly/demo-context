import React from 'react'

export const ProfileCard = (props) => {
    console.log('card props', props)
    return (
        <div>
            <div>A card</div>
            <div>{`Age: ${props.age}`}</div>
        </div>
    )
}
