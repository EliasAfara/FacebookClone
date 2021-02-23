import React from 'react';
import './StoryReel.css';
import AddStory from './AddStory';
import Story from './Story';

import { useStateValue } from '../../../StateProvider';
import { IconButton } from '@material-ui/core';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

const StoryReel = () => {
  const [{ user }] = useStateValue();

  return (
    <div className='storyReel'>
      <AddStory
        profileSrc={user?.picture}
        title={user?.name}
        image={user?.picture}
      />

      {/* <Story
        profileSrc='https://instagram.fbey4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/64543472_400523757481104_8253502120007827456_n.jpg?_nc_ht=instagram.fbey4-1.fna.fbcdn.net&_nc_ohc=m9OhBU01v_0AX-ux-Wz&tp=1&oh=7313ac35f1516929c072e8d436287a23&oe=605CE663'
        title='Cristiano Ronaldo'
        image='https://instagram.fbey4-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.322.828.828a/152947452_176276740695785_5420408323133371727_n.jpg?_nc_ht=instagram.fbey4-1.fna.fbcdn.net&amp;_nc_cat=1&amp;_nc_ohc=Gre6po2Hr60AX8NwRGh&amp;tp=1&amp;oh=d1f4e4cd62ec50bc8336c636b94d0291&amp;oe=60374A96&amp;ig_cache_key=MjUxNTAxNDM5NzQ0MTc4MjY2NQ%3D%3D.2'
      /> */}

      <Story
        profileSrc='https://instagram.fbey4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/135811429_139036817943437_5718038198453340319_n.jpg?_nc_ht=instagram.fbey4-1.fna.fbcdn.net&_nc_ohc=X-B1T92UnqEAX8q1yH7&tp=1&oh=48ebc7b6a8df354b6a5a09a6cd5cab63&oe=605CA17D'
        title='Kendall Jenner'
        image='https://instagram.fbey4-1.fna.fbcdn.net/v/t51.2885-15/e35/152549210_433839594546440_783004203221448317_n.jpg?_nc_ht=instagram.fbey4-1.fna.fbcdn.net&amp;_nc_cat=1&amp;_nc_ohc=7fySZvu5zwIAX-3GiS5&amp;tp=1&amp;oh=d8f3803252de77dd9dd30d99a7948228&amp;oe=6036A929&amp;ig_cache_key=MjUxNDkxMzIwNTkzMjc0Mzk4NA%3D%3D.2'
      />

      <Story
        profileSrc='https://instagram.fbey4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/144239150_750891512216358_3545443985785619001_n.jpg?_nc_ht=instagram.fbey4-1.fna.fbcdn.net&_nc_ohc=uijQtUf3_9YAX84rG_y&tp=1&oh=c82688e912da65917e1017816ae8cacd&oe=605F8A56'
        title='Dwayne Johnson'
        image='https://cdn.thespaces.com/wp-content/uploads/2020/01/Gymshark-hero-crop.jpg'
      />

      <Story
        profileSrc='https://scontent.fbey4-1.fna.fbcdn.net/v/t1.0-1/p200x200/139087690_247937383363831_3946519858767046441_o.jpg?_nc_cat=1&amp;ccb=3&amp;_nc_sid=c6021c&amp;_nc_ohc=PdWXpnVc_CsAX98-YmE&amp;_nc_ht=scontent.fbey4-1.fna&amp;tp=6&amp;oh=c9ce3f67501cc948d5dd25bd4d9a2427&amp;oe=605B5E66'
        title='LeBron James'
        image='https://i.pinimg.com/originals/d6/cd/fd/d6cdfd8e6a16d9cab2d1cc8c5c686d0e.jpg'
      />

      <Story
        profileSrc='https://instagram.fbey4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/44329317_268583430479565_454483638147350528_n.jpg?_nc_ht=instagram.fbey4-1.fna.fbcdn.net&_nc_ohc=OOcYgdBqzwcAX-NEDky&tp=1&oh=350d32219bb35ac8e5e9db39e9234f26&oe=605DD830'
        title='Elon Musk'
        image='https://i.guim.co.uk/img/media/bb2fe725bc74f451d5bcbdcbee027c7fdfabaa76/0_100_5000_3002/master/5000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=09982b4628d5d748dab682f8f77173a7'
      />

      <div className='next__story'>
        <IconButton>
          <ArrowForwardRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default StoryReel;
