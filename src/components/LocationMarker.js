import ReactAnimatedWeather from 'react-animated-weather';



const LocationMarker = ({ lat, lng, state , onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>          
    {state.includes("clear sky")? 
    <ReactAnimatedWeather
    icon='CLEAR_DAY'
    color='goldenrod'
    size= {50}
    animate= {true}
    /> 
    : state.includes("clouds")?
    <ReactAnimatedWeather
    icon='PARTLY_CLOUDY_DAY'
    color='#29465b'
    size= {50}
    animate= {true}
    /> 
    : state.includes("rain")?
    <ReactAnimatedWeather
    icon='RAIN'
    color='#00BFFF'
    size= {50}
    animate= {true}
    />
    :state.includes("snow")?
    <ReactAnimatedWeather
    icon='SNOW'
    color='#D3D3D3'
    size= {50}
    animate= {true}
    />
    : state.includes("fog")?
    <ReactAnimatedWeather
    icon='FOG'
    color='#29465b'
    size= {50}
    animate= {true}
    />
    :<ReactAnimatedWeather
    icon='PARTLY_CLOUDY_DAY'
    color='#29465b'
    size= {50}
    animate= {true}
    />

    }

        </div>
    )
}

export default LocationMarker


