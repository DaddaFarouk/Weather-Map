const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>{info.name.includes('Santa')? 'Agadir': info.name }</h2>
            <ul>
    <li>Temperature: <strong>{ info.temp } °C</strong>  </li>
    <li>Lowest: <strong>{ info.temp_min-2 } °C</strong>  </li>
    <li>Highest: <strong>{ info.temp_max } °C</strong>  </li>
    <li>Feels Like: <strong>{ info.feels_like } °C</strong> </li>
    <li>Weather: <strong>{ info.weather }</strong></li>
    <li>Humidity: <strong>{ info.humidity } %</strong>  </li>
    <li>Pressure: <strong>{ info.pressure } hPa</strong> </li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
