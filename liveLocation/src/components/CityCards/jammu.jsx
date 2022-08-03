

import React from 'react'

const Jammu = () => {


    return (
        <>
            <div className='mapdiv'>

                <iframe
                    style={{
                        height: "800px",
                        width: "800px",
                        zoom: "1"
                    }}

                    title="gmap"
                    name="gMap"
                    className="map"
                    src={`https://maps.google.com/maps?q=32.726601,74.857025&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
            </div>
        </>
    )
}

export default Jammu