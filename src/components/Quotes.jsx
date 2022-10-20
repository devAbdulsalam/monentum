// import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import SyncLoader from 'react-spinners/SyncLoader'
import axios from "axios";

const options = {
            method: 'POST',
            url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '86cfb535b2msh2c5232bce17206bp195115jsnec46ed122ec1',
              'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
            },
            data: '{"key1":"value","key2":"value"}'
          };

const Quotes = () => {
    const [quote, setQuote] = useState('')
    const [isLoading, setLoading] = useState(true)
    
      useEffect(() =>{
          axios.request(options).then((response) =>{
            setQuote(() => response.data);
            setLoading(() => (false))
          }).catch((error) => {
            console.error(error);
          });

    }, [])

    if(isLoading){
      return (
        <div className="text-center">
          <SyncLoader  color="#36d7b7" size={8}  />
        </div>
      )
    } 

  return (
    <motion.div initial={{opacity : 0}} animate={{opacity : 1 }}  className='text-center md:w-6/12 m-auto my-2'>
        <p className='text-xl font-bold m-3'>{quote}</p>
        {/* <p className='text-2xl font-bold text-gray-50 animate-bounce'>{quote.author}</p> */}
    </motion.div>
  )
}

export default Quotes