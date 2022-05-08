import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header logo={logo}/>
        <Project/>
        <Footer footer="@ 2022 David's Portfolio"/>
    </div>
  );
}

export default App;
