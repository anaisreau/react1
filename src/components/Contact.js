import React from 'react';
import  './Contact.css';


    const  status = true ;
    const  name = <h3 className= 'name'>Jeremy Wilson</h3>;
    const avatar = <img className ='avatar' alt='Jeremy' src='https://randomuser.me/api/portraits/men/7.jpg'/>
    const online = <img className ='status-online' alt='bouton' src='https://pngimage.net/wp-content/uploads/2018/05/bouton-vert-png-4.png'/>


function Contact () {
    return (
        <div className ="Contact">
        {avatar}
        <div ClassName= "status-text">
        {name}
        {online}
        {status ? 'online' : 'offline'}
        </div>
        
        </div>
    )
}
export default Contact