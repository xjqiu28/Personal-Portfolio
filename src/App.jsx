import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Profile from './components/Profile.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
        <div className={darkMode ? "dark" : "light"}>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Profile />
          <About />
          <Experience />
          <Contact/>
          <Footer/>
        </div>
    </>
  )
}

export default App
