import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface props {
    setAction: (action: string) => void,
    toggleTheme: (event: React.MouseEvent) => void,
    theme: string
}
const Menu = ({setAction, toggleTheme, theme}: props) => {

    let currentYear = new Date().getFullYear(); 

    const toggleWidth = () => document.getElementById('menu')!.classList.toggle('opened');
         

    return(
        <div>
            <button onClick={toggleWidth} className="openbtn"><FontAwesomeIcon icon={faBars}/></button>
            <div 
                className="buttons hidden" 
                id="menu"
                onMouseEnter={() => setAction('slow')}
                onMouseLeave={() => setAction('')}
            >
                <button onClick={toggleWidth} className="closebtn">&times;</button>            
                <a href="/#projects">See my projects</a>
                <a href="/#contact">Get in touch</a>
                <a href="https://github.com/martinslaby70" target="_blank">Github</a>
                <a href="/">Checkout my resume</a>            
                <a href="" onClick={(e) => toggleTheme(e)} className="switcher">Switch to {theme === 'dark' ? 'light' : 'dark'} theme</a>
                <p>Martin Slabý &copy; 2020{currentYear > 2020 ?  ' - ' + currentYear : null}</p>
            </div>
        </div>
    )
} 

export default Menu;