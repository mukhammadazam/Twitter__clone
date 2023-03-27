import './Right.scss';
import search from './imges/search.svg';
import settings from './imges/settings.svg';
import img10 from './imges/uchhnuqta.svg';
import img11 from './imges/obunachi.svg';
import img12 from './imges/obunachi1.svg';
import { Link } from 'react-router-dom';
const TwtrRght = () => {
  return (
    <div className='site' >
        <div className="right ">
<div className=" position-relative">
<input className="right__input" type="text" placeholder="Search Twitter" />
<img className='right__search' src={search} alt="search" />
</div>
<div className=" right__text">
    <div className="d-flex tren align-items-center justify-content-center ">
        <h4  className='tren__title'>Trends for you</h4>
       <Link className='text-decoration-none'> <img src={settings} alt="settings" /></Link>
    </div>
    <div className="d-flex treng align-items-center justify-content-center ">
        <span  className='treng__title'>Trending in Germany</span>
        <Link className='text-decoration-none'> <img src={img10} alt="settings" /></Link>
    </div>
    <h5 className='right__relo--title'>Revolution</h5>
    <span className='right__relo--leni'>50.4K Tweets</span>
    <div className="d-flex treng align-items-center justify-content-center ">
        <span  className='treng__title'>Trending in Germany</span>
        <Link className='text-decoration-none'> <img src={img10} alt="settings" /></Link>
    </div>
    <h5 className='right__relo--title'>Revolution</h5>
    <span className='right__relo--leni'>50.4K Tweets</span>
    <div className="d-flex treng align-items-center justify-content-center ">
        <span  className='treng__title'>Trending in Germany</span>
        <Link className='text-decoration-none'> <img src={img10} alt="settings" /></Link>
    </div>
    <h5 className='right__relo--title'>Revolution</h5>
    <span className='right__relo--leni'>50.4K Tweets</span>
    <Link className='right__relo--btn text-decoration-none d-block'>Show more</Link>
</div>
<div className=" follow mt-5">
    <p className='follow__text'>
    You might like
    </p>
    <div className="obuna d-flex align-items-center justify-content-center">
        <img src={img11} alt="obunachi" />
        <div className="obunachi__link d-flex align-items-center justify-content-center">
          <div>
          <p className="obuna__text mb-0">Mushtariy</p>
            <span className="obuna__leni">@Mushtar565266</span>
          </div>
            <button className="obuna__btn d-block">Follow</button>
        </div>
    </div>
    <div className="obuna pt-4 d-flex align-items-center justify-content-center">
        <img  src={img12} alt="obunachi" />
        <div className="obunachi__link d-flex align-items-center justify-content-center">
          <div>
          <p className="obuna__text mb-0 me-3">Shuhratbek</p>
            <span className="obuna__leni me-3">@mrshukhrat</span>
          </div>
            <button className="obuna__btn ms-5 d-block">Follow</button>
        </div>
    </div>
    <Link className='right__relo--btn text-decoration-none d-block'>Show more</Link>

</div>
<p className="right__tems--text">
Terms of Service
Privacy Policy
Cookie Policy
</p>
<p className="right__tems--text ">
Imprint
Ads Info
More ···
© 2021 Twitter, Inc.
</p>
        </div>
    </div>
  )
}

export default TwtrRght