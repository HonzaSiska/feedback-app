import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {

//version 1 conditional styling by toggeling class

//   return (
//     <div className={`card ${reverse && 'reverse'}`}>{children}</div>
//   )


//version 2 conditional styling by toggeling style poperties
    return (
        <div className='card' style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#333'
        }}>{children}</div>
    )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card