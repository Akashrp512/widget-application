import React, {useState} from 'react'
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import { items } from './constants';
import { options } from './constants';
import Translate from './components/Translate';
import Route from './components/Route';

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
  
const [selected, setSelected] = useState(options[0])

  return (
    <div>
   <Route path="/">
    <Accordion items={items} />
   </Route>
   <Route path="/dropdown">
    <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected} />
   </Route>
   <Route path="/list">
    <Search />
   </Route>
   <Route path="/translate">
    <Translate />
   </Route>
    </div>
  );
};

export default App
