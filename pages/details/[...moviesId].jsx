import axios from 'axios';
import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';

export default function moviesId() {
    let router = useRouter()
    let [details , setDetails] =useState([])
    async function getDetails(media_type, id){
      let {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=64d768e4d0a647d938254dd3d191863f&language=en-US`)
      setDetails(data)
      console.log(data)
    }
    useEffect(()=> {
      getDetails( router?.query.moviesId[1], router?.query.moviesId[0])
    }, [])
  return <>
    <div className="row align-items-center justify-content-center">
            <div className="col-md-3">
            {details.profile_path ?  <img className="w-100 rounded-circle" src={'https://image.tmdb.org/t/p/w500/'+ details.profile_path} alt=""/>:  <img className="w-100 rounded-circle" src={'https://image.tmdb.org/t/p/w500/'+details.poster_path} alt={router?.query.moviesId[1] == 'movie' ? details.title : details.name} width={200} height={300} /> }

            </div>
            </div>
            <div className="row align-items-center justify-content-center">

            <div className="col-md-9 text-center ">
                <h3 title={details.media_type == 'movie' ? details.title : details.name} className="card-title h2">{router?.query.moviesId[1] == 'movie' ? details.title : details.name}</h3>
                <p className='text-muted py-2'>{details.overview}</p>
                <p className='text-wihte py-2'>Vote average : {details.vote_average && details.vote_average?.toFixed(1)}</p>
                <p className='text-wihte py-2'>Vote count : {details.vote_count && details.vote_count?.toFixed(1)}</p>
                
            </div>
        </div>
  </>
}
