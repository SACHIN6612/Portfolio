import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Hero from './Hero.jsx'
import Intro from './Intro.jsx'
import Skills from './Skills.jsx'
import Education from './Education.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="hero" element={<Hero />} />
        <Route path="intro" element={<Intro />} />
        <Route path="skills" element={<Skills />} />
        <Route path="education" element={<Education />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
