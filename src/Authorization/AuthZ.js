import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthZ = ({children}) => {
    const {userData} = useSelector(state => state.user)
    if(userData){
        return (<Navigate to='/browse' />)
    }
    return children;
}

export default AuthZ