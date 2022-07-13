import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/Logo.svg';
import { ReactComponent as Chat } from '../images/Chat.svg';
import { ReactComponent as Profile } from '../images/Profile.svg';

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>
        <div className='logo'>{<Logo />}</div>
      </Link>
      <ul>
        <Link to='/messages'>
          <li>{<Chat />}</li>
        </Link>
        <Link to='/profile'>
          <li>{<Profile />} Username</li>
        </Link>
      </ul>
    </nav>
  )
}
