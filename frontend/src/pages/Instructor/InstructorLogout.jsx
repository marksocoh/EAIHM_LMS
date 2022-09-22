import React from 'react'

const InstructorLogout = () => {
    localStorage.removeItem('InstuctorLoginStatus');
    window.location.href="/instructor-login";
    
  return (
    <div></div>
  )
}

export default InstructorLogout