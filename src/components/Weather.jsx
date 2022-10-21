import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SyncLoader from 'react-spinners/SyncLoader'
import {LocalStorage} from './LocalStorage'


const Weather = () => {
  const momentumUser = LocalStorage()
  const [data, setData] = useState("")
    useEffect(() =>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${momentumUser.location}&units=imperial&appid=062183c9cb6dd20fe2ce2ea4f552730d`)
        .then((response) =>{
            setData(() => response.data)
        }).catch((error) => console.log(error))
    }, [momentumUser])
    // console.log(momentumUser.location)

  if(!data)  return <SyncLoader  color="#36d7b7" size={8} /> 
  return (
    <div>
      <p className='text-3xl '>{data.main.temp.toFixed(0)}&deg; <span className='text-white text-xl font-bold'>{data.name}</span></p>
      
    </div>
  )
}

export default Weather
