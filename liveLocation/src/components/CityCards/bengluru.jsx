//This will show the map of particular city after clicking

import React from 'react'

const Bengluru = () => {


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
          src={`https://maps.google.com/maps?q=12.971599,77.594566&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        ></iframe>
      </div>
    </>
  )
}

export default Bengluru