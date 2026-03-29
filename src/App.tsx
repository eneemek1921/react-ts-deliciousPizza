
import './App.css'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu/Menu'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
