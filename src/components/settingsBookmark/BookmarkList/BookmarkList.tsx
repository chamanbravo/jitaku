import { IoMdCreate, IoIosTrash, IoIosSave, IoIosCloseCircleOutline} from "react-icons/io"

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

function BookmarkList({editIndex, setEditIndex, setToggle, bookmarks, setBookmarks, bookmark}: BookmarkProps) {
  const delteBookmarkItem = (id: number) => {
    const newBookmarks = bookmarks.map(bookmark => {
      bookmark.lists = bookmark.lists.filter(list => list.id !== id)
      return bookmark
    })
    setBookmarks(newBookmarks)
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
  }

  return (
    <div className='settings-bookmarks__lists'>
      {bookmark.lists.map((list, j) => {
        return (
          <div key={j} className='settings-bookmarks__list'>
            {editIndex === list.id ? 
              (
                <>
                  <input type="text" value={list.title} />
                  <input type="text" value={list.url} />
                  <div className='settings-bookmarks__icons'>
                    <IoIosSave />
                    <IoIosCloseCircleOutline onClick={() => setEditIndex(null)} />
                  </div>
                </> 
              ):(
                <>
                  <p>{list.title}</p>
                  <p>{list.url}</p>
                  <div className='settings-bookmarks__icons'>
                    <IoMdCreate onClick={() => setEditIndex(list.id)} />
                    <IoIosTrash onClick={() => delteBookmarkItem(list.id)}/>
                  </div>
                </>
              )
            }
          </div>
        )
      })}
    </div>
  )
}

export default BookmarkList