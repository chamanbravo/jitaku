import mainImg from '../../assets/main-img.gif'
import './Image.css'

function Image() {
    return (
        <div className='main-img'>
            <img className='main-img_img' src={mainImg} alt="" />
        </div>
    );
}

export default Image;