import React, {useState} from 'react'
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import { items } from './constants';
import { options } from './constants';
import Translate from './components/Translate';

const showAccordion =() =>{
  if(window.location.pathname === '/'){
    return <Accordion items={items} />
  }
}
const showList =() =>{
  if(window.location.pathname === '/list'){
    return <Search />
  }
}
const showDropdown =() =>{
  if(window.location.pathname === '/dropdown'){
    return <Dropdown   options={options}  />
  }
}
const showTranslate =() =>{
  if(window.location.pathname === '/translate'){
    return <Translate />
  }
}

const App = () => {
  
  return (
    <div>
   {showAccordion()}
   {showList()}
   {showDropdown()}
   {showTranslate()}

    </div>
  );
};

export default App
