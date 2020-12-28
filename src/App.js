
import './App.css';
import Deshboard from './Components/Deshboard/Deshboard/Deshboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SreemangleDetails from './Components/SreemangleDetails/SreemangleDetails';
import ShundarbanDetails from './Components/ShundarbanDetails/ShundarbanDetails';
import SajekDetails from './Components/SajekDetails/SajekDetails';
import SreemangleHotels from './Components/SreemangleHotels/SreemangleHotels';
import ShundarbanHotels from './Components/ShundarbanHotels/ShundarbanHotels';
import SajekHotels from './Components/SajekHotels/SajekHotels';
import Login from './Components/Login/Login';
import { createContext,useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <div className="App">
      <Router>
        <Switch>
            <Route exact  path="/">
              <Deshboard/>
            </Route>
            <Route path="/sreemangle">
              <SreemangleDetails/>
            </Route>
            <Route path="/shundarban">
              <ShundarbanDetails/>
            </Route>
            <Route path="/sajek">
              <SajekDetails/>
            </Route>
            <PrivateRoute path="/sreemanglehotels">
              <SreemangleHotels/>
            </PrivateRoute>
            <PrivateRoute path="/shundarbanhotels">
              <ShundarbanHotels/>
            </PrivateRoute>
            <PrivateRoute path="/sajekhotels">
              <SajekHotels/>
            </PrivateRoute>
            <Route path="/login">
              <Login/>
            </Route>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>

  );
}

export default App;
