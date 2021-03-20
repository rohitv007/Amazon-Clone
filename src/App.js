import React, { useEffect } from 'react';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout'
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {

  const promise = loadStripe("pk_test_51HrKxpBnIlKm7xwuSN9nKmK0U021l18Gy11jCXsVjoGmN3YUFsRh5gRvlk0e3sdQmFa8pLwIHJO1798PRhJALsgG003DmgLUWE");

  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect( () => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged( authUser => {
      console.log('The user is ',authUser);
      if(authUser) {
        // the user just/was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [dispatch])

  return ( 
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe = { promise }>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
