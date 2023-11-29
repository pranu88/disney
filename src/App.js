import './App.css';
import './style.css';
import DisneyPlus from './components/DisneyPlus';
import NewOnDisney from './components/NewOnDisney';
import { Route , Routes } from 'react-router-dom';
import Trending from './components/Trending';
import ComingSoon from './components/ComingSoon';
function App() {
  return (
    <div className="App">
     <DisneyPlus/> 
    <Routes>
    <Route path='/NewOnDisney' element={<NewOnDisney/>}/>
    <Route path='/Trending' element={<Trending/>}/>
    <Route path='/ComingSoon' element={<ComingSoon/>}/>
    </Routes>
    
    </div>
  );
}

export default App;