import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


interface props {
    setAction: (action: string) => void 
}
const AboutMe = ({setAction}: props) => {
    
    const movingText = ['Developer', 'Ice hockey player', 'Student', 'Dog owner'];

    return(
        
        <div className="section">
            <div 
                className="aboutMe"
                onMouseEnter={() => setAction('reverse')}
                onMouseLeave={() => setAction('')}
            >
                <h1>Martin Slabý <span> - <ReactTypingEffect text={movingText} speed={50} typingDelay={100} eraseDelay={2000} cursor={' '}/></span></h1>
                

                <h2>Hi,</h2>
                <p>I am a recent high school graduate with a major interest in web development and web technologies in general. I started developing client-side applications as I am more of a visual person and I like to see my progress as I am building the app. I am also a genuinely active person, from a young age, I have been playing ice hockey and it has been my hobby ever since. </p>
               
            </div>

            
        </div>
    )
}

export default AboutMe;