import { useState } from 'react'
import './Settings.css'

function Settings() {
  const [toggle, setToggle] = useState<number>(-1)
  const bookmarks: { title: string, lists: {title: string, url: string}[] }[] = JSON.parse(localStorage.getItem('bookmarks') || '[]')
  return (
    <div className='settings'>
      <div className='settings-item'>
        <h1 className='settings-title'>Bookmarks</h1>
          <div className='settings-bookmarks__item'>
            {bookmarks.map((item, i) => {
              return (
                <div key={i}>
                  <h3 className='settings-bookmarks__title' onClick={() => {setToggle(i)}}>{'>'} {item.title}</h3>
                  {
                    toggle === i && (
                      <div className='settings-bookmarks__lists'>
                        {item.lists.map((list, j) => {
                          return (
                            <div key={j} className='settings-bookmarks__list'>
                              <a href={list.url} target='_blank' rel='noreferrer'>{list.title}</a>
                            </div>
                          )
                        })}
                      </div>
                    )
                  }
                </div>
              )
            })}
          </div>
        <h2 className='add-bookmark-btn'>New Bookmark</h2>
      </div>
    </div>
  )
}

export default Settings
  