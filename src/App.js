import React, {useState} from 'react'
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import { items } from './constants';
import { options } from './constants';


const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown]=useState(true);

  return (
    <div>
    <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
    { showDropdown ?
     <Dropdown 
     selected ={selected} 
     onSelectedChange={setSelected}
     options={options} 

     /> :null
     }

    </div>
  );
};

export default App
