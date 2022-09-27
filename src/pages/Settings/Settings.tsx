import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import SettingsBookmark from '../../components/settingsBookmark/SettingsBookmark'
import './Settings.css'

type bookmarksList = {
  id: string,
  title: string,
  url: string
}

type BookmarkType = {
id: string,
title: string,
lists: bookmarksList[]
}

function Settings() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([])
  const [editIndex, setEditIndex] = useState<string | null>(null)

  useEffect(() => {
    const bookmark: BookmarkType[] = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setBookmarks(bookmark)
  },[])

  const addNewBookmark = () => {
    const id: string = uuidv4()
    const newBookmark = [ ...bookmarks, {id, title: 'new', lists: []} ]
    setBookmarks(newBookmark)
    setEditIndex(id)
    localStorage.setItem('bookmarks', JSON.stringify(newBookmark))
  }

  return (
    <div className='settings'>
      <div className='settings-item'>
        <h1 className='settings-title'>Bookmarks</h1>
          <SettingsBookmark bookmarks={bookmarks} setBookmarks={setBookmarks} editIndex={editIndex} setEditIndex={setEditIndex} />
        <h2 className='add-bookmark-btn' onClick={addNewBookmark}>New Bookmark</h2>
      </div>
    </div>
  )
}

export default Settings
  