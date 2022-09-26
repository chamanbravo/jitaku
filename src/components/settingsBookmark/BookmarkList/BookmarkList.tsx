import { useState } from 'react'
import { IoMdCreate, IoIosTrash, IoIosSave, IoIosCloseCircleOutline} from "react-icons/io"
import './BookmarkList.css'

type BookmarkType = {
  id: number,
  title: string,
  lists: BookmarkLists[]
}

type BookmarkLists = {
  id: number,
  title: string,
  url: string
}

type BookmarkProps = {
  editIndex: number | null
  setEditIndex: (id: number | null) => void
  setBookmarks: (bookmarks: BookmarkType[]) => void
  bookmarks: BookmarkType[]
  list: BookmarkLists
}

function BookmarkList({editIndex, setEditIndex, bookmarks, setBookmarks, list}: BookmarkProps) {
  const [bookmarkItem, setBookmarkItem] = useState<{title: string, url: string}>({
    title: list.title,
    url: list.url
  })

  const editBookmarkItem = (id: number) => {
    const newBookmark = bookmarks.map(bookmark => {
      bookmark.lists.map(list => {
        if (list.id === id) {
          list.title = bookmarkItem.title
          list.url = bookmarkItem.url
        }
        return list
      })
      return bookmark
    })
    setBookmarks(newBookmark)
    localStorage.setItem('bookmarks', JSON.stringify(newBookmark))
    setEditIndex(null)
  }

  const delteBookmarkItem = (id: number) => {
    const newBookmarks = bookmarks.map(bookmark => {
      bookmark.lists = bookmark.lists.filter(list => list.id !== id)
      return bookmark
    })
    setBookmarks(newBookmarks)
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
  }

  return (
    <>
      {editIndex === list.id ? 
        (
          <>
            <input type="text" className='edit-input-box flex-1' value={bookmarkItem.title} onChange={(e) => setBookmarkItem({...bookmarkItem, title:e.target.value})} />
              <input type="text" className='edit-input-box flex-2' value={bookmarkItem.url} onChange={(e) => setBookmarkItem({...bookmarkItem, url:e.target.value})} />
                <div className='settings-bookmarks__icons'>
                  <IoIosSave onClick={() => editBookmarkItem(list.id)}/>
                   <IoIosCloseCircleOutline onClick={() => setEditIndex(null)} />
                </div>
          </> 
        ):(
          <>
            <p className="bookmark-list-title flex-1">{list.title}</p>
            <p className="bookmark-list-title flex-2">{list.url}</p>
            <div className='settings-bookmarks__icons'>
              <IoMdCreate onClick={() => setEditIndex(list.id)} />
              <IoIosTrash onClick={() => delteBookmarkItem(list.id)}/>
            </div>
          </>
        )
      }
    </>
  )
}

export default BookmarkList