import SettingsBookmark from '../../components/settingsBookmark/SettingsBookmark'
import './Settings.css'

function Settings() {  
  return (
    <div className='settings'>
      <div className='settings-item'>
        <h1 className='settings-title'>Bookmarks</h1>
          <SettingsBookmark />
        <h2 className='add-bookmark-btn'>New Bookmark</h2>
      </div>
    </div>
  )
}

export default Settings
  