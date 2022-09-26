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
  },[])
  
  return (
    <div className='settings-bookmarks__item'>
      {bookmarks.map((bookmark, i) => {
        return (
          <div key={i}>
            <Bookmark editIndex={editIndex} setEditIndex={setEditIndex} setToggle={setToggle} bookmarks={bookmarks} setBookmarks={setBookmarks}  bookmark={bookmark} />
              {
                toggle === bookmark.id && (
                  <div className='settings-bookmarks__lists'>
                    {bookmark.lists.map((list, j) => {
                      return (
                        <div key={j} className='settings-bookmarks__list'>
                            <BookmarkList editIndex={editIndex} setEditIndex={setEditIndex} bookmarks={bookmarks} setBookmarks={setBookmarks}  list={list}/>
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
  )
}

export default SettingsBookmark