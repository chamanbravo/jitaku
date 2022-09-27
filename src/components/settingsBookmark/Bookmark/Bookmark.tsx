import { useState } from 'react';
import { IoMdCreate, IoIosTrash, IoIosAdd, IoIosSave, IoIosCloseCircleOutline} from "react-icons/io"
import { v4 as uuidv4 } from 'uuid'

type BookmarkType = {
  id: string,
  title: string,
  lists: {
    id: string,
    title: string,
    url: string
  }[]
}

type BookmarkProps = {
  editIndex: string | null
  setEditIndex: (id: string | null) => void
  setToggle: (id: string | null) => void
  setBookmarks: (bookmarks: BookmarkType[]) => void
  bookmarks: BookmarkType[]
  bookmark: BookmarkType
}

function Bookmark({editIndex, setEditIndex, setToggle, bookmarks, setBookmarks, bookmark}: BookmarkProps) {
  const [title, setTitle] = useState(bookmark.title)

  const editBookmarkTitle = (id: string) => {
    const newBookmarks = bookmarks.map(bookmark => {
      if (bookmark.id === id) bookmark.title = title
      return bookmark
    })
    setBookmarks(newBookmarks)
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
    setEditIndex(null)
  }

  const deleteBookmark = (id: string) => {
    const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(newBookmarks)
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
  }

  const addBookmarkItem = (id: string) => {
    const BookmarkItemId: string = uuidv4()
    const newBookmarks = bookmarks.map(bookmark => {
      if (bookmark.id === id) {
        bookmark.lists.push({id: BookmarkItemId, title: 'new', url: 'https://'})
      }
      return bookmark
    })
    setBookmarks(newBookmarks)
    console.log(newBookmarks)
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
    setToggle(id)
    setEditIndex(BookmarkItemId)
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
              <IoIosAdd onClick={() => addBookmarkItem(bookmark.id)} />
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