import React from 'react'
import './../scss/skills.scss';

import mos_word from './../imgs/certificates/mos-word.jpg'; 
import mos_powerpoint from './../imgs/certificates/mos-powerpoint.jpg';  

const Skills = () => {

    return(
        <div className="section">
            <h2>What am i using</h2>
            <p>You should be able to see the technologies that I am using from my projects alone. So in this section, I will only include technologies and software that help me in web development or benefits me in any other way.</p>
            <p>I am focusing on frontend development, but I think every frontend developer should have a tiny bit of backend experience, I have made a couple of servers (as API providers) in <span className="bold">Node.js</span> and <span className="bold">express.js</span>. <span className="silent"><a href="https://github.com/martinslaby70/calendar/blob/main/server.js" target="_blank">(simple code example)</a></span></p>
            <div className="skills-container">
                <div>
                    <h2>Video / Image manipulation</h2>
                    <ul>
                        <li className="tooltip">Sony Vegas Pro
                            <span className="tooltiptext">
                                cutting and editing videos used for website background
                            </span>
                        </li>
                        <li className="tooltip">Gimp 2
                            <span className="tooltiptext">
                                sometimes image needs some kind of tuning up, as is color correction, cutting out background or removing small objects.
                            </span>
                        </li>
                        <li className="tooltip">Inkscape
                            <span className="tooltiptext">
                                great software for designing logos and icons in vector graphic
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Workflow</h2>
                    <ul>
                        <li className="tooltip">VS Code
                            <span className="tooltiptext">
                                configurated VS Code can make a major performance difference
                            </span>
                        </li>
                        <li className="tooltip">Figma
                            <span className="tooltiptext">
                                it's always good to see your thoughts before you start coding
                            </span>
                        </li>
                        <li className="tooltip">Git
                            <span className="tooltiptext">
                                git &amp; git actions can help us improve the process of backing up our code
                            </span>
                        </li>
                        <li className="tooltip">NPM
                            <span className="tooltiptext">
                                sometimes it's better to use someone else's code :)
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Others</h2>
                    <ul> 
                        <li><a href={mos_word} target="_blank">Microsoft Word</a></li>
                        <li><a href={mos_powerpoint} target="_blank">Microsoft PowerPoint</a></li>
                        <li className="tooltip">Cinema 4D
                            <span className="tooltiptext">
                                3d modeling mostly for school projects
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;