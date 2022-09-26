import { useState } from 'react';
import { IoMdCreate, IoIosTrash, IoIosAdd, IoIosSave, IoIosCloseCircleOutline} from "react-icons/io"

type BookmarkType = {
  id: number,
  title: string,
  lists: {
    id: number,
    title: string,
    url: string
  }[]
}

type BookmarkProps = {
  editIndex: number | null
  setEditIndex: (id: number | null) => void
  setToggle: (id: number | null) => void
  setBookmarks: (bookmarks: BookmarkType[]) => void
  bookmarks: BookmarkType[]
  bookmark: BookmarkType
}

function Bookmark({editIndex, setEditIndex, setToggle, bookmarks, setBookmarks, bookmark}: BookmarkProps) {
  const [title, setTitle] = useState(bookmark.title)

  const editBookmarkTitle = (id: number) => {
    const newBookmarks = bookmarks.map(bookmark => {
      if (bookmark.id === id) bookmark.title = title
      return bookmark
    })
    setBookmarks(newBookmarks)
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
    setEditIndex(null)
  }

  const deleteBookmark = (id: number) => {
    const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(newBookmarks)
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
  }

  return (
    <div className='setting-bookmarks__item-div'>
      {editIndex === bookmark.id ? 
        (
          <>
            <input className='edit-input-box' type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} />
              <div className='settings-bookmarks__icons'>
                <IoIosSave onClick={() => editBookmarkTitle(bookmark.id)} />
                <IoIosCloseCircleOutline onClick={() => setEditIndex(null)} />
              </div>
          </>
        ):(
          <>
            <h3 className='settings-bookmarks__title' onClick={() => {setToggle(bookmark.id)}}>{'>'} {bookmark.title}</h3>
            <div className='settings-bookmarks__icons'>
              <IoIosAdd />
              <IoMdCreate onClick={() => setEditIndex(bookmark.id)} />
              <IoIosTrash onClick={() => deleteBookmark(bookmark.id)}/>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Bookmark