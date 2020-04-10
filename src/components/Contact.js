import React from 'react';
import  './Contact.css';



const Contact = ({avatar, name, status}) => {
    return (
        <div className ="Contact">
        <img className ="avatar" alt ='avatar'src ={avatar}/>
        <div>
        <p className="name">{name}</p>
        <div className='status'>
        <i className={status ?'status-online':'status-offline'}/>
        <p className= 'status-text'>{status ? "online" : "offline"}</p>
        </div>
        </div>
        </div>

       
    )
};

export default Contact