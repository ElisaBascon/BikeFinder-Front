import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './views/Home';
import Navbar from './components/Navbar';
import ErrorPage from './views/ErrorPage';
import Signup from './views/auth/Signup';
import Login from './views/auth/Login';
import PrivateView from './views/PrivateView';
import IsPrivate from './components/IsPrivate';
import NewReview from './views/NewReview';
import Reviews from './views/Reviews';
import Bikes from './views/Bikes';


function App() {
  return (
    <div className="App">
      <Toaster/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<IsPrivate><PrivateView/></IsPrivate>}/>
        <Route path="/newreview" element={<NewReview/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/mybikes" element={<Bikes/>}/>
        <Route path="*" element={<ErrorPage />} />
        {/* Ruta /:id (detalle de bici) */}
        {/* Ruta /reviews/:id (detalle de review) */}
      </Routes>
    </div>
  );
}

export default App;
