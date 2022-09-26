import { useState } from 'react'
import NewTab from "./pages/NewTab/NewTab";
import Settings from "./pages/Settings/Settings";
import './App.css'

function App() {
  const [settings, setSettings] = useState<Boolean>(false)
  return (
    <>
      <NewTab />
      {settings && <Settings />}
      <h1 className='settings-btn' onClick={() => setSettings(!settings)}>{settings ? '<<' : '>>'}</h1>
    </>
  )
}

export default App;
