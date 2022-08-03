

import React from 'react'

const Nagpur = () => {


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
                    src={`https://maps.google.com/maps?q=21.145800,79.088158&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
            </div>
        </>
    )
}

export default Nagpur