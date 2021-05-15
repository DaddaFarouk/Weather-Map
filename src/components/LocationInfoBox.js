const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>{info.name.includes('Santa')? 'Agadir': info.name }</h2>
            <ul>
    <li>Temperature: <strong>{ info.temp }</strong></li>
    <li>Feels Like: <strong>{ info.feels_like }</strong></li>
    <li>Weather: <strong>{ info.weather }</strong></li>
    <li>Humidity: <strong>{ info.humidity }</strong></li>
    <li>Pressure: <strong>{ info.pressure }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
