import React from 'react';
import CreatePost from '../components/home/CreatePost';
import PostContainer from '../components/home/PostContainer';

export default function Home() {
  return (
    <div className='main-content'>
      <CreatePost />
      <PostContainer />
    </div>
  )
}
