const API_key = process.env.REACT_APP_API_KEY
const API_url = 'https://api.themoviedb.org/3'

const simpleFetch = async (endpoint) => { 
    const time = await new Promise((resolve) => setTimeout(resolve, 50))
    const req = await fetch(`${API_url}/${endpoint}`)
    const res = await req.json()
    return res
}

export default {
    
    getHomeList: async () => { 
        return [
            {
                slug: 'originals',
                title: 'Netflix Originals',
                items: await simpleFetch(`discover/tv?with_network=123&api_key=${API_key}`)
            },
            
            {
                slug: 'trending',
                title: 'For you',
                items: await simpleFetch(`trending/all/week?api_key=${API_key}`) 
            },
    
            {
                slug: 'toptread',
                title: 'Top tread',
                items: await simpleFetch(`movie/top_rated?api_key=${API_key}`) 
            },
    
            {
                slug: 'action',
                title: 'Top Treanding TV',
                items: await simpleFetch(`trending/tv/week?api_key=${API_key}`) 
            },
    
            {
                slug: 'comedy',
                title: 'Top Treanding Movies',
                items: await simpleFetch(`trending/movie/week?api_key=${API_key}`) 
            },
    
            {
                slug: 'horror',
                title: 'Horror',
                items: await simpleFetch(`trending/tv/day?api_key=${API_key}`) 
            },
    
            {
                slug: 'romance',
                title: 'Romance',
                items: await simpleFetch(`trending/movie/day?api_key=${API_key}`) 
            },
    
            {
                slug: 'documentary',
                title: 'Docomentary',
                items: await simpleFetch(`discover/movie?with_geners=99&api_key=${API_key}`) 
            }
        ]
    } 
}




export async function RequestMovie(type, id) {
    if (id && type) {
    return await simpleFetch(`${type}/${id}?api_key=${API_key}&append_to_response=videos`)
    }
}

export async function RequestMovieSimilar(type, id) {
    if (id && type) {
    return await simpleFetch(`${type}/${id}/similar?api_key=${API_key}&append_to_response=videos`)
    }
}

export async function RequestMovieSearch(query) {
     return await simpleFetch(`search/multi?api_key=${API_key}&query=${query}`)
}
