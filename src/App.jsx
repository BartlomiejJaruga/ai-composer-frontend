import './App.scss'

import { Route, Routes } from 'react-router-dom'
import HomePage from '@pages/HomePage/HomePage'
import ComposeMelodyPage from '@pages/ComposeMelodyPage/ComposeMelodyPage'
import MelodyBeingComposedPage from '@pages/MelodyBeingComposedPage/MelodyBeingComposedPage'
import AudioPlayerPage from '@pages/AudioPlayerPage/AudioPlayerPage'
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage'
import { useNavigate } from 'react-router-dom'
import SomethingWentWrongPage from '@pages/SomethingWentWrongPage/SomethingWentWrongPage'

function App() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // todo: add checking if melody is being generated  
    navigate("/");
  }


  return (
    <div className="main_app_layout">
      <div id="ai_composer_logo_container">
        <img src="/logo.png" alt='ai_composer_logo_png' onClick={handleLogoClick} />
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/composeMelody' element={<ComposeMelodyPage/>} />
        <Route path='/melodyBeingComposed' element={<MelodyBeingComposedPage/>} />
        <Route path='/audioPlayer' element={<AudioPlayerPage/>} />
        <Route path='/somethingWentWrong' element={<SomethingWentWrongPage />} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </div>
  )
}

export default App
