import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {MdOutlineKeyboardArrowLeft , MdOutlineKeyboardArrowRight} from 'react-icons/md'

import styles from './styles/MovieRow.module.css'

export default function MovieRow({title, items}) {

    const [scrollX, setScrollX] = useState(0)

    const [itemWidth, setItemWidth] = useState(13)

    useEffect(() => {
         if (window.innerWidth < 475){
            setItemWidth (40)
        }else if (window.innerWidth < 768){
            setItemWidth(28)
        }else if (window.innerWidth < 1200){
            setItemWidth(22)
        } 
    }, [])

 

    const handleScrollLeft = () => {
        let x = scrollX + 50

        if (x > 0) {
            x = 0
        }

        setScrollX(x)
    }

    const handleScrollRight = () => {
        let x = scrollX - 50
        let listW = (items.results.length * itemWidth) * (window.innerWidth / 100)

        if ( (window.innerWidth - listW) > (x * (window.innerWidth / 100)) ) { //-2.457,6
            x = ((items.results.length * itemWidth) - ((items.results.length * itemWidth) * 2)) + 100
        }
    
        setScrollX(x)
    }

  return (
    <div className={styles.movieRow}>
        <h2>{title}</h2>

        <div className={styles.movieRow_arrowLeft} style={{fontSize: 40}} onClick={handleScrollLeft}> <MdOutlineKeyboardArrowLeft/></div>

        <div className={styles.movieRow_arrowRight} style={{fontSize: 40}} onClick={handleScrollRight}> <MdOutlineKeyboardArrowRight/></div>

        <div className={styles.movieRow_listArea}>
            <div className={styles.movieRow_list} style={{
                marginLeft: scrollX + 'vw',
                width: items.results.length * itemWidth + 'vw'
            }}>
                {
                    items.results && items.results.map((item, index) => (
                        <div key={index} className={styles.movieRow_item}>                          
                            <Link to={`/exhibition/${item.name ? 'series' : 'movies'}${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title ? item.title : item.name} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
