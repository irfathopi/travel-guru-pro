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

function App() {
  return (
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
            <Route path="/sreemanglehotels">
              <SreemangleHotels/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
