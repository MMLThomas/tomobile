import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import{ Auth0Provider, useAuth0} from '@auth0/auth0-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Car from './components/pages/Car';
import Search from './components/pages/Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, fetchBookings } from './actions';
import Profile from './components/pages/Profile';
import ProtectedRoute from './auth/ProtectedRoute';
import ConfirmBooking from './components/pages/ConfirmBooking';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';

const App = () => {
  const booking = useSelector(state => state.booking)
  const car = useSelector(state => state.car)
  const dispatch = useDispatch()
  const { isLoading } = useAuth0();

 useEffect(() => {
  dispatch(fetchCars());
 }, [])



  return (
    <Router>
      <Auth0ProviderWithHistory
      >
        <Navbar/>
        <Route path='/' exact component={Home} />
        <Route path='/search' exact component={Search} />
        <Route path='/cars/:id' exact component={Car} />
        <ProtectedRoute path='/confirmbooking' exact component={ConfirmBooking} />
        <ProtectedRoute path='/profile' exact component={Profile} />
        <Footer/>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
