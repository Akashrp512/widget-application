import React, {useState} from 'react'
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import { items } from './constants';
import { options } from './constants';


const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
     <Dropdown 
     selected ={selected} 
     onSelectedChange={setSelected}
     options={options} 

     />

    </div>
  );
};

export default App
