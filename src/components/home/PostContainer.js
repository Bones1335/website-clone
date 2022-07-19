import React from 'react'

export default function PostContainer() {
  return (
    <div className="post-container">
        <div className="secondary-post-container">
            <div className="like-dislike-container">
                <img src="#" alt="upvote"></img>
                <span className="vote-count">1234</span>
                <img src="#" alt="downvote"></img>
            </div>
            <div className="post-information">
                <div className="post-subreddit">
                    <h4>i/goodtimes</h4>
                    <p><em>posted by Username</em></p>
                </div>
                <div className="post-title">
                    <h3>Example Title</h3>
                </div>
                <div className="post-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                       elit. Quisquam tenetur quos reprehenderit beatae 
                       eius cumque maxime unde totam. Minus excepturi 
                       nostrum quis sint vel in illum temporibus optio 
                       dolor nulla.</p>
                </div>
                <div className="post-extras">
                    <button className="comments-button" type="button">Comments</button>
                    <button className="save-post-button" type="button">Save</button>
                </div>
            </div>
        </div>
    </div>
  )
}
