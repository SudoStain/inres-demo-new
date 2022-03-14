import React, { useEffect } from 'react'
import Router from 'next/router';

const admin = () => {
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if(user?.role === 'admin') return
    Router.push('/')
  }, [])
  
  return (
    <div>admin</div>
  )
}

export default admin