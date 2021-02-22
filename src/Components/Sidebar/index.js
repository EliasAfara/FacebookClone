import React from 'react';
import './Sidebar.css';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import TurnedInRoundedIcon from '@material-ui/icons/TurnedInRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import SidebarRow from './SidebarRow';
import { useStateValue } from '../../StateProvider';

const Sidebar = () => {
  const [{ user }] = useStateValue();

  return (
    <div className='sidebar'>
      {/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
      <SidebarRow src={user?.picture} title={user?.name} />
      <SidebarRow
        Icon={LocalHospitalRoundedIcon}
        iconColor='#A3DDD6'
        title='COVID-19 Information Center'
      />
      <SidebarRow
        Icon={SupervisorAccountRoundedIcon}
        iconColor='#4BC8B7'
        title='Friends'
      />
      <SidebarRow
        Icon={SupervisedUserCircleRoundedIcon}
        iconColor='#209FEF'
        title='Groups'
      />
      <SidebarRow Icon={LiveTvRoundedIcon} iconColor='#30A8C5' title='Watch' />
      <SidebarRow
        Icon={EventNoteRoundedIcon}
        iconColor='#E3415D'
        title='Events'
      />
      <SidebarRow
        Icon={TurnedInRoundedIcon}
        iconColor='#B22FAB'
        title='Saved'
      />
    </div>
  );
};

export default Sidebar;
