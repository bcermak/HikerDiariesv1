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
      <Route exact path="/" component={mainPage} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to ="/404"/>
      </Switch>
    </Router>

  );
}

export default App;
