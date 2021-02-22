import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

const SidebarRow = ({ src, Icon, iconColor, title }) => {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon style={{ color: `${iconColor}` }} />}
      {title && <h4>{title}</h4>}
    </div>
  );
};

export default SidebarRow;
