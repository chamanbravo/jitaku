import { useState, useEffect } from 'react'
import Bookmark from './Bookmark/Bookmark'
import BookmarkList from './BookmarkList/BookmarkList'
import './SettingsBookmark.css'

interface bookmarksList {
    id: number,
    title: string,
    url: string
}

interface BookmarkType {
  id: number,
  title: string,
  lists: bookmarksList[]
}

function SettingsBookmark() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([])
  const [toggle, setToggle] = useState<number | null>(null)
  const [editIndex, setEditIndex] = useState<number | null>(null)

  
  useEffect(() => {
    const bookmark: BookmarkType[] = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setBookmarks(bookmark)
  },[bookmarks])
  
  return (
    <div className='settings-bookmarks__item'>
      {bookmarks.map((bookmark, i) => {
        return (
          <div key={i}>
            <Bookmark editIndex={editIndex} setEditIndex={setEditIndex} setToggle={setToggle} bookmarks={bookmarks} setBookmarks={setBookmarks}  bookmark={bookmark} />
              {
                toggle === bookmark.id && (
                  <BookmarkList editIndex={editIndex} setEditIndex={setEditIndex} setToggle={setToggle} bookmarks={bookmarks} setBookmarks={setBookmarks}  bookmark={bookmark}/>
                )
              }
          </div>
        )
      })}
    </div>
  )
}

export default SettingsBookmark