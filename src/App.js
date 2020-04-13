import React from 'react';
import './App.css';
import ContactList from './components/ContactList';


const Jeremy = {
  name :'Jeremy Wilson',
  avatar :'https://randomuser.me/api/portraits/men/7.jpg',
  status :true ,
}

const Gabbe = {
  name : 'Gabbe Kelly',
  avatar : 'https://randomuser.me/api/portraits/men/37.jpg',
  status :true,
}

const Morris = {
  name : 'Morris Obrien',
  avatar : 'https://randomuser.me/api/portraits/men/44.jpg' ,
  status :false ,
}


function App() {
  return (
    <>
    <ContactList/>
    </>
  );
}


export default App;
