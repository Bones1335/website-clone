import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/Logo.svg';

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>
        <div className='logo'>{<Logo />}</div>
      </Link>
    </nav>
  )
}
