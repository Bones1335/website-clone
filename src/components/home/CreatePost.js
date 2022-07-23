import React, { useState } from 'react';
import Image from '../../images/Image.png';
import PostForm from './PostForm';


export default function CreatePost() {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const handleClick = () => {
    togglePopup();    
  }

  return (
    <>
      <div className="create-post-container">
          <img className='profile-picture' src='#' alt='profile pic'></img>   
          <input className="create-post" placeholder='Create Post' onClick={handleClick}></input>
          <button className="create-image-button" type='button'>
            <img className="create-image-button" src={Image} alt='Create Img Post'></img>
          </button>
      </div>
      {isOpen && <PostForm togglePopup={togglePopup} />}
    </>
  )
}
