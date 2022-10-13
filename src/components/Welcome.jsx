import React, { useState, useEffect} from 'react'

// localStorage
import {LocalStorage} from './LocalStorage'

import {useNavigate } from 'react-router-dom';
import Form from './Form'

// import framer
import { motion } from 'framer-motion';

 
const Welcome = () => { 
  let navigate = useNavigate()

    // const loadpage = () =>{setTimeout(() => {
    //         navigate("/home")
    //     }, 10000);
    // }
    // const stopLoading = () => {clearTimeout(loadpage);}
    // useEffect(() => {
    //     loadpage()
    //     stopLoading()
    // });
    const User = LocalStorage()
    const [activeUser, setActiveUser] = useState(false)
  useEffect (() =>{
    console.log(User)
    if(User === false){
      console.log('User is false')
      setActiveUser(true)
    }else if(User === ''){
        console.log('User is true')
        console.log(User)
        setActiveUser(false)
    }
  }, [User])
  return (<motion.div initial={{width : '100%'}} animate={{width : '100%'}} exit={{x: window.innerWidth, transition : "1s"}} className='absolute h-screen w-screen flex justify-center items-center bg-slate-500 top-0 left-0'>
                <div className='flex justify-center flex-col w-3/6 text-center'>
                    <h2 className='text-3xl m-3'>Welcome to Momentum</h2>
                    <p className='text-2xl'>We provide you with insprational, enlighten and amazing Quotes to brighten you day,
                    making it as productive, energetic and motivated as possible</p>
                    {activeUser && <Form/>}
                    {activeUser ? '' : <button onClick={() => navigate("/home")} className='bg-green-500 hover:bg-green-600 rounded-md p-2 m-4 text-center w-40 mx-auto cursor-pointer'>Get Started</button>}
                  </div>
                  <div className="fixed w-full bottom-0">
                    <div className="text-center p-6 bg-gray-500 font-semibold">
                      <span>© <span>{new Date().getFullYear().toString()}</span> Copyright : </span>
                      <a  className="text-blue-900 font-semibold" href="https://devabdulsalam.netlify.app" target="_blank" rel='noreferrer'>Dev.Abdulsalm.js</a>
                      <a href="https://twitter.com/MMAbdulsalam001" target="_blank" rel='noreferrer' className="mx-2 twitter"><i className="text-blue-700 fa fa fa-twitter "></i></a>
                      <a href="https://github.com/devAbdulsalam" target="_blank" rel='noreferrer' className="mx-2 github"><i className="fa fa fa-github"></i></a>
                      <a href="https://www.linkedin.com/in/abdulsalammmuftua/" target="_blank" rel='noreferrer' className="mx-2 text-white linkedin"><i className="fa fa fa-linkedin"></i></a>
                    </div>
                </div>
              </motion.div>
  )
}

export default Welcome
