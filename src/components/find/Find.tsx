import {useState} from 'react'
import './Find.css'

function Find() {
  const [searchText, setSearchText] = useState<any>('')
  return (
    <div className="find">
      <h1 className="find_h1">{'>'} find /</h1>
      <input type="text" className="find_input" onChange={(e) => {setSearchText(e.target.value)}} value={searchText} />
    </div>
  );
}

export default Find;
