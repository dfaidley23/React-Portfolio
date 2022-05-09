import logo from './logo.svg';
// import './img';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import AboutResume from './components/AboutResume';

function App() {
  return (
    <div className="App">
      <title>David's Portfolio</title>
          <Header logo={logo}/>
        <body>
          <AboutResume photo='' resumeLink='https://drive.google.com/file/d/12EglZpy6AvmIqKdpTQHEzFZgDDupDCj8/view?usp=sharing'/>
          <Project 
          main='Travel Trustee App'
          mainImg='./new.png'
          projectMain='https://immense-ravine-97579.herokuapp.com/'
          projectMainRepo='https://github.com/ila0406/Travel-Trustees-2'
          p1='Work Day Scheduler'
          p1Img='./work-day.png'
          projectOne='https://dfaidley23.github.io/Work-Day-Scheduler/' 
          projectOneRepo='https://github.com/dfaidley23/Work-Day-Scheduler'
          p2='E-Commerce Back End'
          p2Img='./back-end-snip.png'
          projectTwo='https://github.com/dfaidley23/E-Commerce-back-End' 
          projectTwoRepo='https://github.com/dfaidley23/E-Commerce-back-End'
          p3='Note Taker'
          p3Img='./snip.png'
          projectThree='"https://express-note-taker123.herokuapp.com/' 
          projectThreeRepo='https://github.com/dfaidley23/JS-Note-Taker'
          p4='Social Network API'
          p4Img=''
          projectFour='https://github.com/dfaidley23/Social-Network-API'
          projectFourRepo='https://github.com/dfaidley23/Social-Network-API'
          />
          <Footer footer="@ 2022 David's Portfolio"/>
        </body>
    </div>
  );
}

export default App;
