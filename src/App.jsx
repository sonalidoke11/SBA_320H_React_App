import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Series from './pages/Series'
import Movies from './pages/Movies'
import Episodes from './pages/Episodes'
import Home from './pages/Home'
import Search from './pages/Search'

function App() {

  return (
    <>
      <Nav />
      <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/search" element={< Search/>} />
          <Route path="/series" element={< Series/>} />
          <Route path="/movies" element={< Movies />}/>
          <Route path="/episodes" element={<Episodes />}/>
      </Routes>

    </>
  )
}

export default App

