import { useState, KeyboardEvent } from 'react'
import './Find.css'

function Find() {
  const [searchText, setSearchText] = useState<any>('')

  const search = (e: KeyboardEvent<HTMLInputElement>) => {    
    if (e.key === 'Enter'){
      searchText && window.open(`https://google.com/search?q=${searchText}`, '_self') 
    }
  }

  return (
    <div className="find">
      <h1 className="find_h1">{'>'} find /</h1>
      <input type="text" spellCheck="false" className="find_input" onChange={(e) => {setSearchText(e.target.value)}} value={searchText} onKeyDown={(e) => search(e)} />
    </div>
  );
}

export default Find;
