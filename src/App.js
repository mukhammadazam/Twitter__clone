// import './sass';
import { Route, Routes } from 'react-router-dom';
import Home from './Twitter/Home';
import Twitter from './Twitter/Twitter';
import TwtrRght from './Twitter/TwtrRght';
function App() {
  return (
    <div className='container'>
      <div className='d-flex   justify-content-between'>
        <Twitter />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <TwtrRght />
      </div>

    </div>
  );
}

export default App;
