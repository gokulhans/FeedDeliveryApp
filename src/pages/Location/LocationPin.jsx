import React from 'react'
import './map.css'

function LocationPin({text}) {
    return (
        <div>
            <div className="pin">
                {/* <Icon icon={locationIcon} className="pin-icon" /> */}
                <p className="pin-text">{text}</p>
            </div>
        </div>
    )
}

export default LocationPin