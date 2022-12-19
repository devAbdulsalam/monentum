import React, {createContext, useState, useEffect} from 'react'
// localStorage
import {LocalStorage} from './LocalStorage'

export const AuthContext = createContext()

const AuthcontextProvider = ({children}) => {
    const User = LocalStorage()
    const [activeUser, setActiveUser] = useState(null)
    useEffect (() =>{
        if(User){
            setActiveUser(User)
        }    
    }, [User, setActiveUser])

    const logOut = () =>{
        localStorage.removeItem("momentumUser")
    }

  return (
    <AuthContext.Provider value={{activeUser, logOut}}>{children}</AuthContext.Provider>
  )
}

export default AuthcontextProvider