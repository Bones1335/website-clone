import React from 'react';
import Image from '../../images/Image.png';

export default function CreatePost() {
  return (
    <div className="create-post-container">
        <img className='profile-picture' src='#' alt='profile pic'></img>   
        <input className="create-post" type='text' placeholder='Create Post'></input>
        <button className="create-image-button" type='button'>
          <img className="create-image-button" src={Image} alt='Create Img Post'></img>
        </button>
    </div>
  )
}
