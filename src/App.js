import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Login from './components/Login';
import WooCommerceForm from './components/Woocomerce';
import Dashboard from './components/Dashboard';
import Connector from './components/connector';

function App() {
  return (

    <BrowserRouter>
    <div>
     
      <Routes>
           <Route path="/DashSoul" element={<SideNav />} />
           <Route path="/header" element={<Header />} />
           <Route path="/" element={<Login />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/woocomerce" element={<WooCommerceForm />} />
           <Route path="/connector" element={<Connector/>} />
      </Routes>
    </div>
    </BrowserRouter>

  );
 
}

export default App;     
    