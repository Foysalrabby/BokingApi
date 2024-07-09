import Home from './Pages/Home/Home.jsx'
import { Route, Routes } from 'react-router-dom';
import List from './Pages/Lists/List';
import Login from './Pages/Login/Login.jsx';
import Hotel from './Pages/Hotel/Hotel';

function App() {
  return (
  <div className="App">
  <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/hotel/:id' element={<Hotel/>}> </Route>
    <Route path='/list' element={<List/>}> </Route>
    <Route path='/login' element={<Login/>}> </Route>
  </Routes>
    
 
      
    </div>
  );
}

export default App;
