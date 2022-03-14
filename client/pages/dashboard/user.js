import React,{ useEffect} from 'react'
import Router from 'next/router'

const RepPortal = () => {
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if(user?.role === 'user') return
    Router.push('/')
  }, [])

  return (
    <div>Reportal</div>
  )
}

export default RepPortal