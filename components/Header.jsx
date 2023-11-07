import React from 'react'
import ThemeButton from './ToggleButton'


const Header = () => {
  return (
    <div className='flex justify-between dark:bg-black px-4 pt-4'>
        <h2>Dashboard</h2>
        <h2>Welcome Back, Admin</h2>
        <ThemeButton />
    </div>
  
  )
}

export default Header