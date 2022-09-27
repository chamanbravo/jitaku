import { useState } from 'react'
import Bookmark from './Bookmark/Bookmark'
import BookmarkList from './BookmarkList/BookmarkList'
import './SettingsBookmark.css'

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

type Props = {
  bookmarks: BookmarkType[],
  setBookmarks: (bookmarks: BookmarkType[]) => void
  editIndex: string | null,
  setEditIndex: (editIndex: string | null) => void
}

function SettingsBookmark({bookmarks, setBookmarks,editIndex, setEditIndex}: Props) {
  const [toggle, setToggle] = useState<string | null>(null)
  
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