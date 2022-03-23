import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';



function Routing() {
  
  return (
    
      <Routes>
       <Route exact path="/" element={<Home/>} />
        <Route path="/coin/:id" element={<CoinPage/>} />
        
      </Routes>
    
  );
}








function App() {
  return (
    
    <BrowserRouter>
        
<Header/>
        <Routing/>
        
     
    </BrowserRouter>
 
    );
}

export default App;
