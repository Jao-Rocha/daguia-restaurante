import React from 'react'
import { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {
  let mapWidth = '800px'
  let mapHeight = '350px'
  useEffect(() => {
    if (window.matchMedia('(min-width: 600px)').matches) {
      mapWidth = '800px'
      mapHeight = '350px'
    } else {
      mapWidth = '100px'
      mapHeight = '100px'
    }
  }, [])

  const containerStyle = {
    width: mapWidth,
    height: mapHeight
  }

  const center = {
    lat: -22.45479,
    lng: -47.52916
  }

  return (
    <div className="sm:w-2/3">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map
