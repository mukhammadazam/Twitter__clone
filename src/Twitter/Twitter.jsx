import img from './imges/twitter-logo.svg';
import img1 from './imges/chat.svg';
// import img2 from './imges/kopsms.svg';
// import img3 from './imges/lists.svg';
// import img4 from './imges/profel.svg';
import img5 from './imges/qungiroq.svg';
import img6 from './imges/reshotka.svg';
import img7 from './imges/sms.svg';
import img8 from './imges/twitr-uycha.svg';

import { NavLink } from "react-router-dom";

const Twitter = () => {
  return (
    <div>
          <nav>
            <div className="container">
                <div className="nav">
                <li className="item"><NavLink><img src={img} alt="logo" /></NavLink></li>
                    <li className="item"><NavLink>
                        <img src={img8} alt="reshotka" />
                        <span className='item__leni'>Home</span>
                        </NavLink></li>
                    <li className="item"><NavLink>
                        <img src={img6} alt="reshotka" />
                        <span className='span__leni'>Explore</span>
                        </NavLink></li>
                    <li className="item"><NavLink>
                        <img src={img5} alt="qungiroq" />
                        <span className='item__leni'>Notifications</span>
                        </NavLink></li>
                    <li className="item"><NavLink>
                        <img src={img7} alt="sms" />
                        <span className="item__leni">Messages</span>
                        </NavLink></li>
                    <li className="item"><NavLink>
                        <img src={img1} alt="chat" />
                       <span className="item__leni"> Bookmarks</span>
                       </NavLink></li>
                    <li className="item"><NavLink>
                        Lists</NavLink></li>
                    <li className="item"><NavLink>Profile</NavLink></li>
                    <li className="item"><NavLink>More</NavLink></li>
                    <li className="item"><NavLink>Tweet</NavLink></li>
                </div>
            </div>
          </nav>
    </div>
  )
}

export default Twitter;