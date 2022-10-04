import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='body'>
      <div className='container'>
        <Navbar/>
        <div className='content'>
          <Main />
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
