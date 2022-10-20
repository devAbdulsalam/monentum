import React, { useState} from 'react'

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Form = () => {
    let navigate = useNavigate()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [alert, setAlert] = useState('invisible')
    
    const handleSubmit = (e) =>{
      e.preventDefault()
      if(name === "" || location === ""){
        setAlert("visible")
        setTimeout(() => {
          setAlert('invisible')
        }, 2000);
      }else{
        const person = {name, location};
        localStorage.setItem("momentumUser",JSON.stringify(person))
        navigate("/index")
      }
    }
    const alertVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.1,
        },
      },
    };

  return (<form action="#" onSubmit={handleSubmit} className='flex flex-col justify-center m-12'>
            <label htmlFor="name" className='text-xl'>Enter Your Name</label>
            <input type="text" className='m-2 p-2 text-black' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
            <input type="text" className='m-2 p-2 text-black' id='location' name='location' value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter Your Location" />
            <input type="submit" className='bg-green-500 hover:bg-green-600 rounded-md p-2 text-center w-40 mx-auto cursor-pointer' value="Submit" />
            <motion.p  variants={alertVariants} className={`text-red-600 font-semibold ${alert} text-lg transition-all duration-100`}>please input Your name</motion.p>
        </form>
  )
}

export default Form