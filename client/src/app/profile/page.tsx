
'use client'
import React from 'react'
import NewNavbar from '../components/newnavbar'
import ProfileDashboard from '../components/profiledashboard';
export default function page() {
  return (
    <div>
      <div className='white-wire'>
      <NewNavbar />
      <ProfileDashboard/>
      </div>
    </div>
  )
}
