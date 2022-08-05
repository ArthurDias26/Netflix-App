import React from 'react'
import styles from './styles/FeatureMovie.module.css'
import LinkButton from './LinkButton'
import {FaPlay, FaInfoCircle} from 'react-icons/fa'

export default function FeatureMovie({movieData}) {

  let movieDate = new Date(movieData.first_air_date)
  let movieGeners = movieData.genres.map((gener) => {
      return gener.name
  }) 

  return (
    <section className={styles.featured} style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`}}>

      <div className={styles.featured_shadowX}>
        <div className={styles.featured_shadowY}>


          <div className={styles.featured_info_container}>

            <div className={styles.featured_name}>{movieData.original_name}</div>

            <div className={styles.featured_info} style={
              {opacity: '' }}>
              <div className={styles.featured_points}>{movieData.vote_average.toFixed(1)} pontos</div>
              <div className={styles.featured_year}>{movieDate.getFullYear()}</div>
              <div className={styles.featured_seasons}>{movieData.number_of_seasons} Season{movieData.number_of_seasons > 1 ? 's' : ''}</div>
            </div>

            <div className={styles.featured_description}>{movieData.overview}</div>

            <div className={styles.featured_buttons}>

                <LinkButton link={`exhibition/series${movieData.id}`} icon={<FaPlay/>} text='Play'/>
                <LinkButton link={`exhibition/series${movieData.id}`} customStyle={{
                  backgroundColor: '#BB1D24',
                  color: 'white'
                }} icon={<FaInfoCircle/>} text='More Info'/>

            </div>

            <div className={styles.featured_geners}>Gêneros: {movieGeners.join(", ")}</div>
          </div>
        </div>
      </div>

    </section>
  )
}
