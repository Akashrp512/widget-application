import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm]=useState('React');
    const [results, setResults] =useState([]);
   

    useEffect(()=>{
        const search = async () =>{
          const {data} =  await axios.get('https://en.wikipedia.org/w/api.php', {
             params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                search: term,
            },
            },[]);

            setResults(data.query.search);

        };

    if(term && !results.length){
        search();
    } else{

        const timeoutId = setTimeout(() => {
            if (term) {
                search();
            }
        }, 500);

        return ()=>{
            clearTimeout(timeoutId);
        };
    }

      
    }, [term]); 


   const renderedResults =results.map((result)=>{
        return (
        <div className='item' key={result.pageid}>
        <div className='right floated content'>
            <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
        </div>
        <div className='content'>
            <div className='header'>
                {result.title}
            </div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
        </div>
           </div>
        );
   }) 
  return (
    <div>
      <div className='ui form' >
        <div className='field' >
            <label>Enter Search Term</label>
            <input
            className='input' 
            value={term} 
            onChange={(e )=> setTerm(e.target.value)}
             />
        </div>
        <div className='ui celled list'>
            {renderedResults}
        </div>
      </div>
    </div>
  )
}

export default Search
