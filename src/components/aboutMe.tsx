import React, {useState} from 'react';
import ReactTypingEffect from 'react-typing-effect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import './../scss/aboutMe.scss';
// import img1 from './../imgs/carousel/1.jpg';
// import img2 from './../imgs/carousel/2.jpg';

interface props {
    setAction: (action: string) => void 
}
const AboutMe = ({setAction}: props) => {
    
    const movingText = ['Developer', 'Ice hockey player', 'Student', 'Dog owner'];
    const [isExpanded, setExpand] = useState(false);


    const classes = isExpanded ? 'continuation expanded' : 'continuation';
    return(
        
        <div className="section">
            <div 
                className="aboutMe"
                onMouseEnter={() => setAction('reverse')}
                onMouseLeave={() => setAction('')}
                onClick={() => setExpand(!isExpanded)}
                
            >
                <h1>Martin Slabý <span> - <ReactTypingEffect text={movingText} speed={50} typingDelay={100} eraseDelay={2000} cursor={' '}/></span></h1>
                
                <h2>Hi,</h2>
                <p>I am a recent high school graduate with a major interest in web development and web technologies in general. I started developing client-side applications as I am more of a visual person and I like to see my progress as I am building the app. </p>
                
                <div className={classes}>
                    <p>I am also a genuinely active person, from a young age, I have been playing ice hockey and it has been my hobby ever since. But I also enjoy just chatting with my friend and casually playing video games. </p>
                    <p>After elementary school, I wanted to turn my interest in games into something more productive. I was always more interested in game mechanics than the actual game content. I enjoyed finding bugs, technical glitches, and others, unintended mechanics.  These things lead me to study computer science. But alter on, I found out that game development inst for me. </p>
                    <p>But luckily I was tasked to create a website for an upcoming game that my classmates created. This small static HTML website was my first experience in web development. I truly hope I have made some progress since then  :) . In my opinion, when someone asks you how would you see yourself in two of five years. there isn't a good answer... I feel like I just want to be better than I was a month ago. </p>
                </div>
                
                <div className="icon">
                    <FontAwesomeIcon icon={isExpanded? faArrowUp : faArrowDown} />
                </div>
                
            </div>

            
        </div>
    )
}

export default AboutMe;