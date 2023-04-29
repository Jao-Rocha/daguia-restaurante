import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '400px'
  }

  const center = {
    lat: -23.5627964,
    lng: -46.6549969
  }

  return (
    <LoadScript googleMapsApiKey={process.env.YOUR_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
