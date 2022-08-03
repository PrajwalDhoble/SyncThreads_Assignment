

import React from 'react'

const Hyderabad = () => {


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
                    src={`https://maps.google.com/maps?q=17.385044,78.486671&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
            </div>
        </>
    )
}

export default Hyderabad