import Nav from './Nav';

function Header(props) {
    return (
        <header className="">
            <img src={props.logo} className="App-logo" alt="logo" />
            <Nav github='https://github.com/dfaidley23/' linkedIn='https://www.linkedin.com/in/david-faidley-5208551a4/' about='#abount-me' projects='my-projects' resume='my-resume' contact='contact'/>
        </header>
    )
};

export default Header;