
import './App.css'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu/Menu'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </>
  )
}

export default App
