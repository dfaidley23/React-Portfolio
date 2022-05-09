function Project(props) {
    return (
            <div className="App">
                <h3 id='my-projects'>My Projects</h3>
                <div>
                    <h1>{props.main}</h1>
                    <a href={props.projectMain} target="_blank" rel="noopener noreferrer"><img className='App-img' src={props.mainImg} alt={props.main}></img></a>
                    <a href={props.projectMainRepo} target="_blank" rel="noopener noreferrer">Code Repo</a>
                </div>
                <div>
                    <h1>{props.p1}</h1>
                    <a href={props.projectOne} target="_blank" rel="noopener noreferrer"><img className='App-img' src={props.p1Img} alt={props.p1}></img></a>
                    <a href={props.projectOneRepo} target="_blank" rel="noopener noreferrer">Code Repo</a>
                </div>
                <div>
                    <h1>{props.p2}</h1>
                    <a href={props.projectTwo} target="_blank" rel="noopener noreferrer"><img className='App-img' src={props.p2Img} alt={props.p2}></img></a>
                    <a href={props.projectTwoRepo} target="_blank" rel="noopener noreferrer">Code Repo</a>
                </div>
                <div>
                    <h1>{props.p3}</h1>
                    <a href={props.projectThree} target="_blank" rel="noopener noreferrer"><img className='App-img' src={props.p3Img} alt={props.p3}></img></a>
                    <a href={props.projectThreeRepo} target="_blank" rel="noopener noreferrer">Code Repo</a>
                </div>
                <div>
                    <h1>{props.p4}</h1>
                    <a href={props.projectFour} target="_blank" rel="noopener noreferrer"><img className='App-img' src={props.p4Img} alt={props.p4}></img></a>
                    <a href={props.projectFourRepo} target="_blank" rel="noopener noreferrer">Code Repo</a>
                </div>
            </div>
    )
};

export default Project;