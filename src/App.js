import './App.css';
import './style.css';
import DisneyPlus from './components/DisneyPlus';
import NewOnDisney from './components/NewOnDisney';
import { Route , Routes } from 'react-router-dom';
import Trending from './components/Trending';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

import Home from './components/Home';
import Disneylogo from './components/Disneylogo';
import DisneyBody from './components/DisneyBody';
import SecondBody from './components/SecondBody';
import ThirdBody from './components/ThirdBody';
import FourthBody from './components/FourthBody';
import Commingsoon from './components/Commingsoon';
import Vacation from './components/Vacation';
import Footers from './components/Footers';


function App() {
  return (
    <div className="App">

      {/* <Disneylogo/>
      <DisneyBody/>
      <SecondBody/>
      <ThirdBody/>
      <FourthBody/>
      <Commingsoon/>
      <Vacation/> */}
      {/* <Footers/> */}




    {/* <DisneyPlus/>  */}
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/DisneyPlus' element={<DisneyPlus/>}/> 
    <Route path='/NewOnDisney' element={<NewOnDisney/>}/>
    <Route path='/Trending' element={<Trending/>}/>
    <Route path='/ComingSoon' element={<ComingSoon/>}/>
    </Routes>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
