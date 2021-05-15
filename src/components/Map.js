import { useState,React, useRef } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import MapStyles from './MapStyles'

const options = {
    styles: MapStyles,
  };
const center = {
    lat: 33.299466, 
    lng: -7.062824,
}

const Map = ({ citiesInfo}) => {
    const mapRef = useRef();
    const [locationInfo, setLocationInfo] = useState(null)
    const [zoom,setZoom]= useState(8);
    const [bounds,setBounds]=useState(null);

    const markers = citiesInfo.map((info, index) => {       
            return <LocationMarker lat={info.coord.lat} lng={info.coord.lon} state={info.weather[0].description}
            onClick={() => setLocationInfo({ temp: (info.main.temp - 273).toFixed(0) , feels_like: (info.main.feels_like - 273).toFixed(0), 
                                             weather: info.weather[0].description, humidity: info.main.humidity, pressure: info.main.pressure, name: info.name })} 
            />     
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
                defaultCenter= {center} 
                defaultZoom={ 8 }
                options={options}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={
                    ({map})=>{
                        mapRef.current=map;
                    }}  
                onChange={({zoom, bounds}) => {
                    setZoom(zoom);
                    setBounds([
                        bounds.nw.lng,
                        bounds.se.lat,
                        bounds.se.lng,
                        bounds.nw.lat
                    ]);

                } }          
            >
                               {markers}                     
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}  />}
        </div>
    )
  
}


export default Map
