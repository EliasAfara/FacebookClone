import React from 'react';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className='widget'>
      <div className='sponsored'>
        <div className='sponsored__top'>
          <span>Sponsored</span>
        </div>
        <a
          href='https://www.lebanon-freecycle.live/'
          className='sponsored__item'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://res.cloudinary.com/freecyclelebanon/image/upload/v1613940519/lfc_dqjvkj.png'
            alt='Sponsored Site'
            draggable='false'
          />
          <div className='sponsored__item-details'>
            <h3>
              Lebanon Freecycle: Donate Reusable Items & Ask for Support
              Requests
            </h3>
            <p>lebanon-freecycle.live</p>
          </div>
        </a>
      </div>
      <iframe
        title='facebook Iframe'
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookforDevelopers&tabs=timeline&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        height='500'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameBorder='0'
        allow='encrypted-media'
      ></iframe>
    </div>
  );
};

export default Widgets;
