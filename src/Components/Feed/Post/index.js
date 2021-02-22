import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import NearMeRoundedIcon from '@material-ui/icons/NearMeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

const Post = ({ profilePicture, image, username, timestamp, message }) => {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar
          src={profilePicture && profilePicture}
          className='post__avatar'
        />

        <div className='post__topInfo'>
          <h3>{username && username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className='post__bottom'>
        <p>{message && message}</p>
      </div>

      <div className='post__image'>
        <img src={image && image} alt='' loading='lazy' draggable='false' />
      </div>

      <div className='post__options'>
        <div className='post__option'>
          <ThumbUpRoundedIcon />
          <p>Like</p>
        </div>

        <div className='post__option'>
          <ChatBubbleOutlineRoundedIcon />
          <p>Comment</p>
        </div>

        <div className='post__option'>
          <NearMeRoundedIcon />
          <p>Share</p>
        </div>

        <div className='post__option'>
          <AccountCircleRoundedIcon />
          <ArrowDropDownRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
