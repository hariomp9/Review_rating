import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usersignup from './components/user/Usersignup';
// import Usersignin from './components/user/Usersignin';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <div>
           <Routes>
             <Route path="" element={<Usersignup/>}/>
             {/* <Route path="/" element={<Usersignin/>}/> */}
           </Routes>
         </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
