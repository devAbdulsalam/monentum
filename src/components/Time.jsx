import React, { useState, useEffect} from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
// UserName
import {LocalStorage} from './LocalStorage'

const Time = () => {
  const User = LocalStorage()
  const [userName, setUserName] = useState('')

  useEffect(() =>{
    setUserName(User)
  },[User])
  let now = new Date()
    const greeting = () => {
        if(now.getHours() >= 5 && now.getHours() < 11 ){
            return `Good Morning,  ${userName}`
        }else if(now.getHours() >= 11 && now.getHours() < 17){
            return `Good Afternoon,  ${userName}`
        }else if(now.getHours() >= 17 && now.getHours() < 24 ){
            return `Good Evening, ${userName}`
        }else{
            return 'What are you doing by Time?'
        }
    }
  return (
    <div className='text-center' >
        <p className='text-6xl md:text-9xl p-2 m-2'><Moment format='LT'></Moment></p>
        <p className='text-xl font-semi-bold text-white'>{greeting()}</p>
    </div>
  )
}

export default Time