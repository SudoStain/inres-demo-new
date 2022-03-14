import React,{ useEffect} from 'react'
import Router from 'next/router'

const superadmin = () => {
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if(user?.role === 'superadmin') return
    Router.push('/')
  }, [])

  return (
    <div>superadmin</div>
  )
}

export default superadmin