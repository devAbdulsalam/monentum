import { useState, useEffect} from 'react'

export const LocalStorage = () => {
    const [userName, setUserName] = useState('')
    const getlocalStorage= () => {
        const fromLocal = JSON.parse(localStorage.getItem("momentumUser"));
        if (fromLocal === null) {
            return false
        } else {
            return fromLocal
        }
    }
    
    useEffect (() =>{
        setUserName(() => getlocalStorage())
    },[])
  return userName
}
