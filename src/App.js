import './App.css';

import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/layout/Header'
import Home from './components/pages/Home'
import Search from './components/pages/Search'
import Exhibition from './components/pages/Exhibition'
import Footer from './components/layout/Footer'
import Loading from './components/layout/Loading'

import TMDB from './api/request'

function App() {

  const [movieList, setMovielist] = useState([])

  useEffect(() => {
    async function loadAll () { 
      let list = await TMDB.getHomeList()
      setMovielist(list)
  }

    loadAll()
  }, [])

  return (
    <div className="app_container">
      <Router>
        <Header/>

        <div className='section_container'>
          <Routes>

            <Route path="/" element={<Home movieData={movieList}/>}/>
            <Route path="/search" element={<Search/>}/>

            <Route path="/exhibition/:id" element={<Exhibition/>}/>
            
          </Routes>
        </div>

        <Footer/>
      </Router>

      {movieList.length === 0 && <Loading/>}
    </div>
  )
}

export default App;
