import React from 'react';
import  './Contact.css';


class Contact extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            online: true
        };
    }
render (){
return (
    <div className ="Contact">
        <img className ="avatar" alt ='avatar'src ={this.props.avatar}/>
        <div>
        <p className="name">{this.props.name}</p>
        <div className='status'>
        <i className={this.state.online ?'status-online':'status-offline'}/>
        <p className= 'status-text'>{this.state.online ? 'online' : 'offline'}</p>
        </div>
        
        <div>
        <button 
          onClick={event => {
              const online = !this.state.online
              this.setState({online : online})
          }}
        >Status</button>
        </div></div></div>
       
    );
        }
};



export default Contact