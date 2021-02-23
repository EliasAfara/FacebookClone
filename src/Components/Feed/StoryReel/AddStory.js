import React from 'react';
import './StoryReel.css';
import { IconButton } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const AddStory = ({ image }) => {
  return (
    <div className='addStoryContainer'>
      <div className='story'>
        <div className='addStory__images'>
          <img src={image} alt='' draggable='false' />
        </div>

        <div className='addStory__text'>
          <div className='add__story'>
            <IconButton>
              <AddRoundedIcon />
            </IconButton>
          </div>
          <span>Create a Story</span>
        </div>
      </div>
    </div>
  );
};

export default AddStory;
