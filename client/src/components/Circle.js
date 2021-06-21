import React from 'react'

function Circle({children, circleRef}) {
    return (
        <div className="circle" ref={circleRef}>
            {children}
        </div>
    )
}

export default Circle
