import React, { useState } from 'react';

export default function PostForm({togglePopup}) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }
  
  return (
    <div className='post-form-container'>
        <form onSubmit={handleSubmit}>
            <h3>Create Post:</h3>
            <label for="title">Title: </label>
                <input name="title" id="title" type='text'></input>
            <label for="post-input">Post: </label>
                <textarea name="post-input" id="title"></textarea>
            <div className="post-buttons">
              <button id="submit-button" type="submit">Post</button>
              <button id="cancel-button" type="button" onClick={togglePopup}>Cancel</button>
            </div>
        </form>
    </div>
  )
}
