import { useState } from 'react'
import Image from './components/image/Image'
import Find from './components/find/Find'
import Categories from './components/categories/Categories'
import Settings from './components/settings/Settings'
import bookmarksList from './mock/index'
import './App.css'

function App() {
  const [settings, setSettings] = useState<Boolean>(false)
  const bookmarks: { title: string, lists: {title: string, url: string}[] }[] = JSON.parse(localStorage.getItem('bookmarks') || '[]')
  if (bookmarks.length === 0) {
    console.log('no bookmarks')    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarksList))
  }
  
  return (
    <>
    <div className='main-body'>
      <div className="main-item">
        <Image />
        <div className='box'>
            <Find />
            <div className='categories'>
              {bookmarks.map((item, i) => {
                const { title, lists } = item
                return (
                  <Categories key={i} title={title} lists={lists}/>
                )
              })}
          </div>
        </div>
      </div>
    </div>
    {settings && <Settings />}
    <h1 className='settings-btn' onClick={() => setSettings(!settings)}>{'<<'}</h1>
    </>
  );
}

export default App;
