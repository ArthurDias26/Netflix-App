import React, {useEffect, useState} from 'react'

import MovieRow from '../layout/MovieRow'
import FeatureMovie from '../layout/FeatureMovie'

import styles from './styles/Home.module.css'

import {RequestMovie} from '../../request'

export default function Home({movieData}) {

  const [featureData, setFeatureData] = useState(null)

  let originals = movieData.filter(movie => movie.slug === 'originals')

  useEffect(() => {
    async function changeFeatureData() {
      if (originals[0]){
        let randomNumber = Math.floor(Math.random() * originals[0].items.results.length - 1)
        let chosen = originals[0].items.results[randomNumber]
        let chosenInfo = await RequestMovie('tv', chosen.id)
        setFeatureData(chosenInfo)
      }
    }
    changeFeatureData()
  }, [movieData])


  return (
    <div className={styles.homePage}>

      <section className={styles.feature}>
        {
          featureData && <FeatureMovie movieData={featureData}/>
        }
      </section>

      <section className={styles.lists}>
        {
        movieData.length > 0 && movieData.map((item, index) => (
          <MovieRow key={index} title={item.title} items={item.items}/>
        ))
        }
      </section>

    </div>
  )
}
