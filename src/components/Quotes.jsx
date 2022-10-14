// import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const url = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'

const Quotes = () => {
    const [data, setData] = useState('')
    const [isLoading, setLoading] = useState(true)
      useEffect(() =>{
        fetch(url)
        .then((response) => response.json())
        .then((data) => {setData(data)
            setLoading(false)
        })
        .catch((error) => console.log(error))

    }, [])

    if(isLoading){
      return (
      <h2 className='text-center' >Loading ...</h2>
      )
    } 

  return (
    <motion.div initial={{opacity : 0}} animate={{opacity : 1 }}  className='text-center md:w-6/12 m-auto my-2'>
        <p className='text-xl font-bold m-3'>{data.quotes[0].text}</p>
        <p className='text-2xl font-bold text-gray-50 animate-bounce'>"{data.quotes[0].author}"</p>
    </motion.div>
  )
}

export default Quotes