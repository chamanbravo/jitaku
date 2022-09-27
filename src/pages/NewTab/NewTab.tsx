import Image from '../../components/image/Image'
import Find from '../../components/find/Find'
import Categories from '../../components/categories/Categories'
import bookmarksList from '../../mock/index'
import './NewTab.css'

function NewTab() {   
  let bookmarks: { title: string, lists: {title: string, url: string}[] }[] = []
  if (localStorage.getItem('bookmarks') !== null){
    bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')   
  } else {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarksList))
  }

  return (
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
  )
}

export default NewTab;
