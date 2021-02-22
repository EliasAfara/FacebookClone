import React from 'react';
import './StoryReel.css';
import Story from './Story';
import { useStateValue } from '../../../StateProvider';

const StoryReel = () => {
  const [{ user }] = useStateValue();

  return (
    <div className='storyReel'>
      <Story
        profileSrc={user?.picture}
        title={user?.name}
        image={user?.picture}
      />
      <Story
        profileSrc='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1140334229.jpg?crop=0.668xw:1.00xh;0.216xw,0&resize=640:*'
        title='Kendall Jenner'
        image='https://www.voicesofyouth.org/sites/voy/files/styles/blog_teaser/public/images/2019-03/nature-3125912_960_720.jpg?h=c71d0c67&itok=0Xj3U33d'
      />
      <Story
        profileSrc='https://s.abcnews.com/images/Entertainment/WireAP_91d6741d1954459f9993bd7a2f62b6bb_16x9_992.jpg'
        title='Dwayne Johnson'
        image='https://cdn.thespaces.com/wp-content/uploads/2020/01/Gymshark-hero-crop.jpg'
      />
      <Story
        profileSrc='https://s.abcnews.com/images/Entertainment/WireAP_91d6741d1954459f9993bd7a2f62b6bb_16x9_992.jpg'
        title='Dwayne Johnson'
        image='https://cdn.thespaces.com/wp-content/uploads/2020/01/Gymshark-hero-crop.jpg'
      />
      <Story
        profileSrc='https://s.abcnews.com/images/Entertainment/WireAP_91d6741d1954459f9993bd7a2f62b6bb_16x9_992.jpg'
        title='Dwayne Johnson'
        image='https://cdn.thespaces.com/wp-content/uploads/2020/01/Gymshark-hero-crop.jpg'
      />
    </div>
  );
};

export default StoryReel;
