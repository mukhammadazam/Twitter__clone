// import './sass';
// import { Route, Routes } from 'react-router-dom';
import Twitter from './Twitter/Twitter';
import TwtrRght from './Twitter/TwtrRght';
function App() {
  return (
  <div className='container'>
   <div className='d-flex   justify-content-between'>
   <Twitter/>
    {/* // <Routes>
    // </Routes> */}
    <TwtrRght/>
   </div>
    
  </div>
  );
}

export default App;
