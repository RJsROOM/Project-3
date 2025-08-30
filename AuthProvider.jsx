import React from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const AuthContext= createContext()

// localStorage.clear()
const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const {employees}=getLocalStorage()
    setUserData(employees)
  }, [])
  

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
          {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider