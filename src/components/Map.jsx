import React from 'react'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useMediaQuery } from 'react-responsive'

const Map = () => {
  let widthForMap = '300px'

  const responsiveLevel1 = useMediaQuery({ minWidth: 400 })
  const responsiveLevel2 = useMediaQuery({ minWidth: 670 })
  const responsiveLevel3 = useMediaQuery({ minWidth: 768 })
  const responsiveLevel4 = useMediaQuery({ minWidth: 1000 })
  const responsiveLevel5 = useMediaQuery({ minWidth: 1350 })
  const responsiveLevel6 = useMediaQuery({ minWidth: 1500 })
  const responsiveLevel7 = useMediaQuery({ minWidth: 1650 })
  const responsiveLevel8 = useMediaQuery({ minWidth: 2000 })

  if (responsiveLevel1) {
    widthForMap = '320px'
  }
  if (responsiveLevel2) {
    widthForMap = '630px'
  }
  if (responsiveLevel3) {
    widthForMap = '330px'
  }
  if (responsiveLevel4) {
    widthForMap = '460px'
  }
  if (responsiveLevel5) {
    widthForMap = '600px'
  }
  if (responsiveLevel6) {
    widthForMap = '700px'
  }
  if (responsiveLevel7) {
    widthForMap = '800px'
  }
  if (responsiveLevel8) {
    widthForMap = '950px'
  }

  const containerStyle = {
    width: widthForMap,
    height: '350px'
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
