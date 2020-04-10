import React from 'react';
import './App.css';
import Contact from './components/Contact';

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
    <Contact {...Jeremy}/>
    <Contact {...Gabbe}/>
    <Contact {...Morris}/>

  </>)
;
}


export default App;
