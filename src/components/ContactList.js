import React from 'react'

const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: false
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true
    }
  ];

  const ContactList = () => (
    <div>
      {users.map(item => (
        <div className ="Contact">
        <img className = 'avatar' src={item.avatar} alt={item.name} />
        <div>
        <p className="name">{item.name}</p>
        <div className='status'>
        <i className={item.online ?'status-online':'status-offline'}/>
        <p className= 'status-text'>{item.online ? "online" : "offline"}</p>
        </div>
        </div>
        </div>
      ))}
    </div>
  );


export default ContactList