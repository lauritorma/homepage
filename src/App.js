import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import './fonts.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from"react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { height } from '@mui/system';


function HomeTab () {
  return(
    <Home></Home>
  );
}



function App() {
  return (
    <div className="App" >
    <BrowserRouter className="BrowserRouter">
    <AppBar position="static">
     <Toolbar disableGutters className="toolbar">
      
    <Link className='routerLink' to="/">Home &#127968;</Link>{' '}
    <Link className='routerLink' to="/Contact">Contact &#128235;</Link>{' '}
    <Link className='routerLink' to="/About">About &#128075;</Link>{' '}

    </Toolbar>
    </AppBar>
    <Routes>
      <Route path="/" element={<HomeTab />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />

    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
