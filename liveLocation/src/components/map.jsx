import React from 'react'
import "../styles/map.css"
import { useState , useEffect } from 'react'
import axios from "axios"
const Map = () => {

    const [cityName, setCityName] = useState('')

    const location = () => {
        axios
        .get("https://ipinfo.io/json?token=b63b907a85000e")
        .then((response) => {
          setCityName(response.data.city)
          localStorage.setItem('cityName', JSON.stringify(response.data.city))
        })
      }
      useEffect(()=>{
        location()
      },[])
//   let y = JSON.parse(localStorage.getItem('cityName'))

  return (
    <>
      <div className='mapdiv'>

        <iframe
          title="gmap"
          name="gMap"
          className="map"
          src={`https://maps.google.com/maps?q=${cityName}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
          </div>
    </>
  )
}

export default Map