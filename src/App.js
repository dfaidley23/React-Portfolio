import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <div className="App">
      <title>David's Portfolio</title>
          <Header logo={logo}/>
        <body>
          <Project 
          main='Travel Trustee App'
          mainImg=''
          projectMain='https://immense-ravine-97579.herokuapp.com/'
          projectMainRepo='https://github.com/ila0406/Travel-Trustees-2'
          p1=''
          p1Img=''
          projectOne='https://dfaidley23.github.io/Work-Day-Scheduler/' 
          projectOneRepo='https://github.com/dfaidley23/Work-Day-Scheduler'
          p2=''
          p2Img=''
          projectTwo='https://#' 
          projectTwoRepo='https://github.com/dfaidley23/E-Commerce-back-End'
          p3=''
          p3Img=''
          projectThree='"https://express-note-taker123.herokuapp.com/' 
          projectThreeRepo='https://github.com/dfaidley23/JS-Note-Taker'
          p4=''
          p4Img=''
          projectFour='https://github.com/dfaidley23/Social-Network-API'
          projectFourRepo='http://#'
          />
          <Footer footer="@ 2022 David's Portfolio"/>
        </body>
      </div>
    </div>
  );
}

export default App;
