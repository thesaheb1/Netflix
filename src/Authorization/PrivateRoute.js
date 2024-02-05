import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    
    const {userData} = useSelector(state => state.user)
    if(userData?.displayName){
        return children
    }
  return <Navigate to='/signin' />
}

export default PrivateRoute