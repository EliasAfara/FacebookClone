import React from 'react';
import './StoryReel.css';
import { Avatar } from '@material-ui/core';

const Story = ({ image, profileSrc, title }) => {
  return (
    <div className='storyContainer'>
      <div className='story' style={{ backgroundImage: `url(${image})` }}>
        <Avatar className='story__avatar' src={profileSrc && profileSrc} />
        <h4>{title && title}</h4>
      </div>
    </div>
  );
};

export default Story;
