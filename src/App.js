import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <LoginForm/>
      <Footer />
    </div>
  );
}

export default App;
