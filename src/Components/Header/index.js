import React from 'react';

// SVG
import FacebookSVG from '../../assets/FacebookSVG';

// Icons
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded';
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';

import './Header.css';
import { Avatar, IconButton } from '@material-ui/core';

import { useStateValue } from '../../StateProvider';

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <div className='header'>
      <div className='header__left'>
        <div className='facebook__logo'>
          <FacebookSVG />
        </div>

        <div className='header__input'>
          <SearchRoundedIcon />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>

      <div className='header__center'>
        <div className='header__option header__option--active'>
          <HomeRoundedIcon fontSize='large' />
        </div>

        <div className='header__option'>
          <LiveTvRoundedIcon fontSize='large' />
        </div>

        <div className='header__option'>
          <SupervisedUserCircleRoundedIcon fontSize='large' />
        </div>

        <div className='header__option'>
          <StoreRoundedIcon fontSize='large' />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user?.picture} />
          <h4>{user?.given_name}</h4>
        </div>
        <div className='header__actions'>
          <IconButton>
            <AddRoundedIcon />
          </IconButton>

          <IconButton>
            <ChatRoundedIcon />
          </IconButton>

          <IconButton>
            <NotificationsRoundedIcon />
          </IconButton>

          <IconButton>
            <ExpandMoreRoundedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
