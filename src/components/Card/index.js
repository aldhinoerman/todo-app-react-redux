import React from 'react'

import './Card.scss'

const Card = (props) => {
    const { children, onClick } = props
    return (
        <div className="card" onClick={onClick}>
            {children}
        </div>
    )
}

export default Card
