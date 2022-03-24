import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import {Route,Routes} from "react-router-dom";
function App(){
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path= '/Profile' element ={< Profile />} />
    </Routes>
    </>
  );
}
export default App;
