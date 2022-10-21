import React, { useState, useEffect} from 'react'

// localStorage
import {LocalStorage} from './LocalStorage'

import {useNavigate } from 'react-router-dom';
import Form from './Form'

// import framer
import { motion } from 'framer-motion';
import TradeMark from './TradeMark';

 
const Welcome = () => { 
  let navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
    visible: {
      scale: 1,
    },
  };


  const User = LocalStorage()
  const [activeUser, setActiveUser] = useState(false)
  useEffect (() =>{
    if(User === false){
      // console.log('User is false')
      setActiveUser(() => true)
    }else if(User === ''){
        // console.log('User is true')
        setActiveUser(() =>false)
    }
  
  }, [User, setActiveUser])


  const closeWelcome = () => {
    setIsOpen(false)
    setTimeout(() => {
        navigate("/index")
    }, 100);
  }

  return (<motion.div variants={circleVariants}
        initial='visible'
        animate={isOpen ? 'hidden' : 'visible'} 
        className='absolute h-full w-full flex justify-center items-center welcome bg-no-repeat bg-cover bg-center top-0 right-0'>
                <div className='flex justify-center flex-col px-3 md:w-3/6 text-center'>
                    <h2 className='text-3xl m-3'>Welcome to Momentum</h2>
                    <p className='text-2xl'>We provide you with insprational, enlighten and amazing quotes to brighten you day,
                    making it as productive, energetic and motivated as possible</p>
                    {activeUser && <Form/>}
                    {activeUser ? '' : <button onClick={closeWelcome} className='bg-green-500 hover:bg-green-600 rounded-md p-2 m-4 text-center w-40 mx-auto cursor-pointer'>Get Started</button>}
                  </div>
                  <TradeMark />
              </motion.div>
  )
}

export default Welcome
