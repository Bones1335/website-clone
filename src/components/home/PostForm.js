import React, { useState } from 'react';

export default function PostForm({togglePopup}) {
  
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([postTitle, postText]);
  }

  const handleTitleChange = (e) => {
    setPostTitle({ postTitle: e.target.value });
    
  }

  const handlePostChange = (e) => {
    setPostText({ postText: e.target.value})
  }

  
  
  return (
    <div className='post-form-container'>
        <form onSubmit={handleSubmit}>
            <h3>Create Post:</h3>
            <label for="title">Title: </label>
                <input name="title" id="title" type='text' onChange={handleTitleChange}></input>
            <label for="post-input">Post: </label>
                <textarea name="post-input" id="title" onChange={handlePostChange}></textarea>
            <div className="post-buttons">
              <button id="submit-button" type="submit">Post</button>
              <button id="cancel-button" type="button" onClick={togglePopup}>Cancel</button>
            </div>
        </form>
    </div>
  )
}
