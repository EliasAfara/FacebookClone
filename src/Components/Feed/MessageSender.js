import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './Feed.css';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import MoodRoundedIcon from '@material-ui/icons/MoodRounded';
import { useStateValue } from '../../StateProvider';
import db from '../../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore'; // for cloud firestore

const initialValues = {
  post: '',
  imageUrl: '',
};

const MessageSender = () => {
  const [{ user }] = useStateValue();

  const [formData, setFormData] = useState(initialValues);

  const { post, imageUrl } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.length === 0) {
      alert('You are required to write something.');
    } else {
      db.collection('posts').add({
        message: post,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePicture: user?.picture,
        username: user?.name,
        image: imageUrl,
      });
    }

    setFormData({ post: '', imageUrl: '' });
  };
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user?.picture} />
        <form>
          <input
            className='messageSender__input'
            placeholder={`What's on your mind, ${user?.given_name}?`}
            name='post'
            value={post}
            onChange={handleChange}
            required
          />
          <input
            placeholder='Image URL (Optional)'
            name='imageUrl'
            value={imageUrl}
            onChange={handleChange}
          />

          <button onClick={handleSubmit} type='submit'></button>
        </form>
      </div>

      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamRoundedIcon style={{ color: '#E42645' }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryRoundedIcon style={{ color: '#4BB766' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <MoodRoundedIcon style={{ color: '#EAB026' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
