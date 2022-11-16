
import React, { useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';



export const options= [
    {
       label: 'Afrikaans',
       value: 'af'
    },
    {
       label: 'Arabic',
       value: 'ar'
    },
    {
       label: 'Hindi',
       value: 'hi'
    },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] =useState('');
  return (
    <div>
    <div className='container ui form'>
    <div className='field'>
    <label>Enter Text</label>
    <input value={text} onChange= {(e)=> setText(e.target.value)} />
    </div>
    </div>
      <Dropdown
      label='Select a Language'  
      options={options}
      selected={language}
      onSelectedChange={setLanguage}

      />
      <div className='container ui'>
      <hr />
      <h3 className=' ui header'>Output</h3>
      <Convert text={text} language={language} />
      </div>
    </div>
  );
};

export default Translate


//used Translate Api key instead coz of Paid feature