import { useState, useEffect} from 'react'

export const LocalStorage = () => {
    const [userName, setUserName] = useState('')
    const getlocalStorage= () => {
        const fromLocal = localStorage.getItem("userName");
        if (fromLocal === null) {
            return false
        } else {
            return fromLocal
        }
    }
    
    useEffect (() =>{
        setUserName(getlocalStorage())
    },[userName])
  return userName
}
