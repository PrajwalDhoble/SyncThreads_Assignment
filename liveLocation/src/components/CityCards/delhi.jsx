

import React from 'react'

const Delhi = () => {


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
                    src={`https://maps.google.com/maps?q=28.704060,77.102493&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
            </div>
        </>
    )
}

export default Delhi