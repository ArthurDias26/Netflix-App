import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import{RequestMovie} from '../../request'

import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import AddListButton from '../layout/AddListButton'
import styles from './styles/Exhibition.module.css'

export default function Exhibition() {

  const  {id} = useParams()
  const [exhibitionData, setExhibitionData] = useState(null)

  if(exhibitionData){
    var date = exhibitionData.first_air_date ? new Date(exhibitionData.first_air_date).getFullYear()
      : new Date(exhibitionData.release_date).getFullYear()

      var exhibitionGeners = exhibitionData.genres.map((gener) => {
        return gener.name
      })

      var seasonsOrRunTime = exhibitionData.number_of_seasons ? [exhibitionData.number_of_seasons, 'seasons']
       : [exhibitionData.runtime, 'runtime']

       if (seasonsOrRunTime[1] === 'runtime') {
        let hours = 0

        for (let i = 0; i < seasonsOrRunTime[0]; i += 60) {
          hours++
          seasonsOrRunTime[0] = seasonsOrRunTime[0] - 60
        }

        seasonsOrRunTime[0] = `${hours.toString()}h ${seasonsOrRunTime[0]}m`
       }

  }

  useEffect(() =>{
    async function loadExhibition(type, id) {
      const serie = await RequestMovie(type, id)  //'tv' id.replace('series', '')
      setExhibitionData(serie)
      console.log(serie)

      
    }

    if(id.includes('series')){   
      loadExhibition('tv', id.replace('series', ''))

    }else  if(id.includes('movies')){
      loadExhibition('movie', id.replace('movies', ''))
    }

  }, [])

  return (
    <div className={styles.exhibition_container}> 
      {
        exhibitionData ? (
          <>
          <div className={styles.exhibition_background} style={
            {background: `url(https://image.tmdb.org/t/p/original${exhibitionData.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center', } }>

            <div className={styles.exhibition_shadow}>

              <div className={styles.exhibition_presentation}>

                <h1 className={styles.exhibition_title}>{exhibitionData.name ? exhibitionData.name : exhibitionData.title}</h1>
                <p className={styles.exhibition_tagline}>{exhibitionData.tagline}</p>
                <p className={styles.exhibition_decripion}>{exhibitionData.overview}</p>

              </div>

            </div>
          </div>
          <div className={styles.exhibition_info}>
            <div className={styles.exhibition_points}>{exhibitionData.vote_average.toFixed(1)} Pontos</div>
            <div className={styles.exhibition_date}>{date}</div>
            <div className={styles.exhibition_season_or_time}>
              {seasonsOrRunTime[1] === 'seasons' ?
               seasonsOrRunTime[0] + ` season${seasonsOrRunTime[0] > 1 ? 's' : ''}` 
              : seasonsOrRunTime[0]}
            </div>

          </div>
          <div className={styles.exhibition_geners}>Geners: {exhibitionGeners.map((gener, index) =>(
              <span key={index}>{gener}</span>
            ))}
          </div>

            <div className={styles.exhibition_buttons}>
               <LinkButton link='./' text='Assistir'/>
                <AddListButton link='/' text='+ Adicionar a lista'/>
           </div>

           <div className={styles.exhibition_trailer_container}>
            {exhibitionData.videos.results.map((video, index) =>(
              <iframe src='https://www.youtube.com/watch?v=PdEKecHDhG4'></iframe> //requisição não aceita
            ))}
           </div>
          </>
        ): (
          <Loading/>
        )
      }
    </div>
  )
}
