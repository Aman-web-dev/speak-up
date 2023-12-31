import './index.css'
import Navbar from './components/Navbar'
import Player from './components/Player'
import Video from './components/videos'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from './Pages/Features'
import HomePage from './Pages/HomePage';
import Events from './Pages/Events';
import PricingPage from './Pages/PricingPage';
import Footer from './components/Footer';
import AuthProvider from './AuthProvider';
import Signup from './Signup';
import Login from './Login';

function App() {


  return (
<AuthProvider>
   <BrowserRouter>
   <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/video" element={<Video />} />
          <Route path="/player" element={<Player />} />
          <Route path="/features" element={<Features />} />
          <Route path="/events" element={<Events />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/user-register" element={<Signup />}/>
          <Route path="/user-login" element={<Login />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
</AuthProvider>
  
  )
}

export default App
