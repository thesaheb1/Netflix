import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const OpenRoute = ({children}) => {
    const {userData} = useSelector(state => state.user)
    if(userData?.accessToken){
        return (<Navigate to='/browse' />)
    }
    return children;
}

export default OpenRoute