
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SolutionsArchitect from './pages/Exam/SolutionsArchitect.tsx';
import Practitioner from './pages/Exam/Practioner.tsx';
import About from './pages/About.tsx';
import { BrowserRouter, Route, Routes } from "react-router";
import Header from './combonents/Header.tsx';
import Footer from './combonents/Footer.tsx';
import AiPractitioner from './pages/Exam/Aipractioner.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Header />
    <Routes>

      <Route index path='/' element={<App />} />
      <Route path='saa03' element={<SolutionsArchitect />} /> 
      <Route path='practioner' element={<Practitioner />} /> 
      <Route path='aipractioner' element={<AiPractitioner />} />
      <Route path='about' element={<About />} />

    </Routes>
    <Footer />
  </BrowserRouter>
)
