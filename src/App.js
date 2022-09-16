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
import NewReview from './views/reviews/NewReview';
import Reviews from './views/reviews/Reviews';
import ReviewDetails from './views/reviews/ReviewDetails';
import MyReviews from './views/reviews/MyReviews';
import EditReview from './views/reviews/EditReview';
import Bikes from './views/bikes/Bikes';
import BikesDetails from './views/bikes/BikesDetails';





function App() {
  return (
    <div className="App">
      <Toaster/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/*<Route path="/private" element={<IsPrivate><PrivateView/></IsPrivate>}/>*/}
        <Route path="/newreview" element={<NewReview/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/review/:id" element={<ReviewDetails/>}/>
        {/*MyReviews no funciona, el boton de enlace viene desde Revies*/}
        <Route path="/reviews/:id" element={<MyReviews/>}/>
        <Route path="/edit/:id" element={<EditReview/>}/>
        <Route path="/bikes" element={<Bikes/>}/>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/bikes/:id" element={<BikesDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
