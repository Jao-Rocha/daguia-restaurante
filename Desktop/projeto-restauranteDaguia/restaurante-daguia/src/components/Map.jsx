import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {
  const containerStyle = {
    width: '1000px',
    height: '600px'
  }

  const center = {
    lat: -22.45479,
    lng: -47.52916
  }

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
