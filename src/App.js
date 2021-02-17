import './App.css';
//Router
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect
} from 'react-router-dom';
//Pages
import mainPage from './pages/index';
import NotFoundPage from './pages/404'

function App() {
  return (

    <Router>
      <Switch>
      <Redirect to ="/404"/>
      <Route exact path="/" component={mainPage}/>
      <Route component={NotFoundPage}/>
      </Switch>
    </Router>

  );
}

export default App;
