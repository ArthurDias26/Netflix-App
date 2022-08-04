import React from "react"
import {Link} from 'react-router-dom'
import styles from './styles/MovieBlock.module.css'

export default function MovieBlock({movieData, title}){

    console.log(movieData)

    return(
        <>
            {movieData ? (
                <div className={styles.movieBlock_container}>

                    <h1 className={styles.movieBlock_title}>{title}</h1>

                    <div className={styles.red_line}></div>

                    <div className={styles.movie_items_container}>
                        {movieData.map((movie, index) =>(
                            <>
                                {movie.poster_path && (
                                    <div className={styles.movie_item} key={index}>
                                        <Link to={`/exhibition/${movie.name ? 'series' : 'movies'}${movie.id}`}>
                                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.name ? movie.name : movie.title}/>
                                        </Link>
                                    </div>
                                )}
                            </>
                            
                        ))}
                    </div>

                </div> 
            ):

            (
                <h1>Não foi</h1>
            )}
        </>
    )
}