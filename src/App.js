/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'
import Cities from './components/Cities.json'

const App = () => {

  const citiesId= Cities.map( (result) => { return  result.id } )
  const [citiesInfo, setCitiesInfo]= useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    let coords = [];
    const fetchInfos = async (props) => {
     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${props}&appid=4742c48b3c59c8a36bf8138457495317`)  
     const {coord,weather,main,name} = await res.json()  
     coords.push({coord,weather,main,name})
    }
     
    setLoading(true)
    citiesId.map( (city) => fetchInfos(city) )
    setLoading(false)
    setCitiesInfo(coords) 
    
  }, [])


  return (
    <div>
      <Header />
      { !loading ? <Map citiesInfo={citiesInfo} /> : <Loader /> }
    </div>
  );
}

export default App;
