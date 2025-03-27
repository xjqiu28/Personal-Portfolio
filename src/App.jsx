import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Profile from './components/Profile.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
        <div className={darkMode ? "dark" : "light"}>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Profile />
        </div>
    </>
  )
}

export default App
