import React from 'react'

import './../scss/projects.scss';
import image from './../imgs/previews/devices.png'

interface props {
    setAction: (action: string) => void 
}
const Projects = ({setAction}: props) => {

    

    return(
        <div className="section" id="projects">
            <h2>My projects</h2>
            <div className="projects-container">
                <div className="project">
                    <div className="summary">
                        <h3>Movie App</h3>
                        {/* <p>Search for your favorite movies/series/episodes in the search bar, except for viewing basic information, you can also interact with your movie list. if the whisperer wont help you find your movie, you can press the small search icon and cycle in multiple search results</p> */}
                        <ul>
                            <li>React - Typescript</li>
                            <li>React Hooks</li>
                            <li>Axios</li>
                            <li>SCSS</li>
                            <li>React-Bootstrap</li>
                        </ul>
                        <a href="https://movies-drab.vercel.app" target="_blank">live demo</a>
                        <a href="https://github.com/martinslaby70/movies" target="_blank">code</a>
                    </div>
                    <div className="image-container">
                        <img src={image} alt=""/>
                    </div>
                </div>
               <div className="project">
                    <div className="unavalible" onMouseEnter={() => setAction('stop')} onMouseLeave={() => setAction('')}>
                        <h3>Webscraping project</h3>
                        <p className="silent">work in progress...</p>
                    </div>
                    <div className="unavalible" onMouseEnter={() => setAction('stop')} onMouseLeave={() => setAction('')}>
                        <h3>Unit Testing project</h3>
                        <p className="silent">work in progress...</p>
                    </div>
               </div>
                
            </div>
        </div>
    )
}

export default Projects;