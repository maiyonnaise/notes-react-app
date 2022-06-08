import { BrowserRouter, Routes, Route } from 'react-router-dom'


//styles
import './App.css'
// components
import Home from "./pages/home/Home"
import SingleNote from './pages/single-note/SingleNote'
import Create from './pages/Create/Create'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'
import useTheme from './hooks/useTheme'
function App() {
  const { lightMode } = useTheme


  return (
    <BrowserRouter>
      <div className={`App ${lightMode ? '' : 'darkmode'}`}>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/notes/:id' element={<SingleNote />} >
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
