function Nav(props) {
    return (
    <nav className="">
        <ul>
            <li> <a href={props.github} target="_blank" rel="noopener noreferrer">My Github</a></li>
            <li> <a href={props.linkedIn} target="_blank" rel="noopener noreferrer">My LinkedIn</a></li>
            <li> <a href={props.about}>About Me</a></li>
            <li> <a href={props.projects}>My Work</a></li>
            <li> <a href={props.resume}>My Resume</a></li>
            <li> <a href={props.contact}>Contact Me</a></li>
        </ul>
    </nav>
    )
};

export default Nav;