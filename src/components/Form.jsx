import React, { useState} from 'react'

import { useNavigate } from 'react-router-dom';

const Form = () => {
    let navigate = useNavigate()
    const [name, setName] = useState('')
    const [userName, setUserName] = useState("")
    const [alert, setAlert] = useState('invisible')
    
    const handleChange = (e) =>{
      setName(e.target.value)
    }

    const handleSubmit = (e) =>{
      e.preventDefault()
      if(name === ""){
        setAlert("visible")
        setTimeout(() => {
          setAlert('invisible')
        }, 2000);
      }else{
        setUserName(userName)
        localStorage.setItem("userName", name)
        navigate("/home")
      }
    }

  return (<form action="#" onSubmit={handleSubmit} className='flex flex-col justify-center m-12'>
            <label htmlFor="name" className='text-xl'>Enter You Name</label>
            <input type="text" className='m-2 p-2 text-black' id='name' name='name' value={name} onChange={handleChange} placeholder="Enter You Name" />
            <input type="submit" className='bg-green-500 hover:bg-green-600 rounded-md p-2 text-center w-40 mx-auto cursor-pointer' value="Submit" />
            <p className={`text-red-600 font-semibold ${alert} text-lg transition-all duration-100`}>please input Your name</p>
        </form>
  )
}

export default Form