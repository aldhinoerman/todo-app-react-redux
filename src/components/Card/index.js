import React from 'react'

import './Card.scss'

const Card = ({ title, description }) => {
    return (
        <div className="card">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Card
