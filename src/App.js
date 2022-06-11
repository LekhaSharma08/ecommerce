import Navbar from './components/Navbar';
import Store1 from './pages/Store1';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (

    <>
     <Navbar/>
     <Routes>
       <Route exact path='/' element={<Home />}/>
       <Route path='/store' element={<Store1/>}/>
     </Routes>
    </>
  );
}

export default App;
