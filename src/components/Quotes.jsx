import axios from 'axios'
import React, {useState, useEffect} from 'react'

const url = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'

const Quotes = () => {
    const [data, setData] = useState('')
    // const [loading, setLoading] = useState('')

    // const getQoutes = () =>{
    //     setData(() =>{
    //       fetch(url)
    //       .then((response) => response.json())
    //       .then(data => console.log(data))
    //       .catch(err => {
    //         console.log(err);
    //       })
    //     })
    //   }
      //   getQoutes()
      useEffect(() =>{
        axios.get(url).then((response) =>{
            setData(response.data)
        }).catch((error) => console.log(error))
    }, [])

    if(!data) return null
  //     useEffect(() => {
  //       setInterval(() => {
  //           setData(() => getQoutes())
  //         }, 3000);
  // },[data])
        

    // if(!data){
    //   return {
    //     setLoading(<h2>Loading</h2>)
    //   }
    // } 
  return (
    <div className='text-center md:w-6/12 m-auto my-2'>
        <p className='text-xl font-bold m-3'>{data.quotes[0].text}</p>
        <p className='text-2xl font-bold text-gray-800 animate-bounce'>"{data.quotes[0].author}"</p>
    </div>
  )
}

export default Quotes




      // axios.get(url).then((response) =>{
        //       console.log(response.data)
        //     }).catch((error) => console.log(error))
        //       response.data)