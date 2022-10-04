import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

const Time = () => {
  let now = new Date()
    const greeting = () => {
        if(now.getHours() >= 5 && now.getHours() < 11 ){
            return 'Good Morning, Abdulsalam.'
        }else if(now.getHours() >= 11 && now.getHours() < 17){
            return 'Good Afternoon, Abdulsalam.'
        }else if(now.getHours() >= 17 && now.getHours() < 24 ){
            return 'Good Evening, Abdulsalam.'
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