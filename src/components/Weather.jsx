import React, {useState, useEffect} from 'react'
import axios from 'axios'

const url = "https://api.openweathermap.org/data/2.5/weather?q=kano&units=imperial&appid=062183c9cb6dd20fe2ce2ea4f552730d"

const Weather = () => {
    const [data, setData] = useState("")

    useEffect(() =>{
        axios.get(url).then((response) =>{
            setData(response.data)
        }).catch((error) => console.log(error))
    }, [])

    if(!data) return null
  return (
    <div>
      <p className='text-3xl '>{data.main.temp.toFixed(0)}&deg;</p>
      <p className='text-white text-xl font-bold'>{data.name}</p>
    </div>
  )
}

export default Weather