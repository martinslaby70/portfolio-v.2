import React, { useEffect, useState } from 'react';
import AboutMe from './components/aboutMe'
import Menu from './components/menu';
import Projects from './components/projects';
import Slider from './components/3d/slider';


import Contacts from './components/contact';
import Skills from './components/skills';
//context

//scss
import './scss/index.scss';


const App = () => {
  
  const [action, setAction] = useState('');
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') ? localStorage.getItem('theme')! : 'dark');

  const toggleTheme = (event: React.MouseEvent) => {
    event.preventDefault();
    if (theme === 'dark') 
      setTheme('light')
    else
      setTheme('dark')
  }

  useEffect(() => localStorage.setItem('theme', theme),[theme])

  return (
    <div className={theme} id="themer">
      <div className='container'>
          <div id="content" className="hidden">
            <Menu setAction={setAction} toggleTheme={toggleTheme} theme={theme}/>
            <AboutMe setAction={setAction}/>
            <Projects setAction={setAction}/>
            <Skills />
            <Contacts />
            
          </div>
          <Slider action={action}/>
      </div>
    </div>
  )
}
export default App;
