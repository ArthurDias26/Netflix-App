import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import styles from './styles/Search.module.css'
import MovieBlock from '../layout/MovieBlock'

export default function Search() {

  const location = useLocation()
  const [searchData, setSearchData] = useState(null)
  const [searchTitle, setSearchTitle] = useState(null)

  useEffect(() => {
    if (location.state){
      setSearchTitle(location.state.searchData.searchName)
      setSearchData(location.state.searchData.searchMovies)
    }
    window.scrollTo(0, 0)
  }, [location.state])
  
  
  return (
    <>
      {searchData ? (

        <div className={styles.search_container}>
                
        <MovieBlock movieData={searchData.results} title={`Results for "${searchTitle}"`}/>

        </div>
      ) : (
        <></>
      )}
    </>

    
  )
}
