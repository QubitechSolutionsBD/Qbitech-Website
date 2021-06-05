import React from 'react'

function Feature({data}) {
    return (
        <div className="feature">
          <img src={data.svg} alt="icon"/>
          <h3>{data.numb}</h3>
          <p>{data.desc}</p>
        </div>
    )
}

export default Feature
