import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Weather from './Weather';
import Time from './Time';
import Quotes from './Quotes';
import TradeMark from './TradeMark';
import videoBg from '../assets/videoBg.mp4'
import {AuthContext } from "./AuthContext";
const Index = () => {
  const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () =>{
      logOut()
      navigate('/')
    }
  return (
      <div className="h-screen relative">
        <div className="absolute top-0 left-0 w-full h-full overlay"></div>
        <video className='w-full h-full object-cover' src={videoBg} autoPlay loop muted />
        <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-between">
          <div className='md:w-11/12 md:mx-auto justify-self-start flex justify-between items-center p-2 m-2'>
            <Weather/>
            <button onClick={()=> handleLogOut()} className="text-xl text-white bg-slate-800 p-2 m-2">logout</button>
          </div>
             <Time />
          <div className='justify-self-end flex space-y-6 md:py-6 md:h-80 flex-col justify-center'>
            <Quotes/>
          </div> 
          <TradeMark />
        </div>
      </div>
  )
}

export default Index