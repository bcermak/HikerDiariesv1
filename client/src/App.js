import './App.css';
//Router
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect
} from 'react-router-dom';
//Pages
import mainPage from './pages/index';
import NotFoundPage from './pages/404';
import WeatherPage from './pages/WeatherPage';
import NewPost from './pages/NewPost';
import BuildPlaylist from './pages/BuildPlaylist';

function App() {
  return (

    <Router>
      <Switch>
      <Route exact path="/" component={mainPage} />
      <Route exact path="/newpost" component={NewPost} />
      <Route exact path="/weather" component={WeatherPage} />
      <Route exact path="/playlist" component={BuildPlaylist} />
      <Route exact path="/404" component={NotFoundPage} />
      <Redirect to ="/404"/>
      </Switch>
    </Router>

  );
}

export default App;
