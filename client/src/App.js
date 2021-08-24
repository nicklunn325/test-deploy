import logo from './logo.svg';
import './App.css';
import {Switch, Route, useHistory} from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'

function App() {
  return (
    <div className="App">
      <h1>Test Deploy</h1>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/signup'>
          <Signup/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
