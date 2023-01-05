import Link from "next/link"


export default function Items({mediaType}) {
    return <>

        <div className="col-md-2">
            <Link href={`/details/${mediaType.id}/${mediaType.media_type}`}>
                <div className="movie_card card bg-transparent position-relative" style={{borderColor: '#09c'}}>
                    {mediaType.profile_path ?  <img className="w-100" src={'https://image.tmdb.org/t/p/w500/'+ mediaType.profile_path} alt=""/>:  <img className="w-100" src={'https://image.tmdb.org/t/p/w500/'+mediaType.poster_path} alt={mediaType.media_type == 'movie' ? mediaType.title : mediaType.name}/> }
                    <div className="card-body">
                        <h3 title={mediaType.media_type == 'movie' ? mediaType.title : mediaType.name} className="card-title">{mediaType.media_type == 'movie' ? mediaType.title : mediaType.name}</h3>
                        {mediaType.vote_average && <div className="position-absolute  top-0 end-0 p-2 text-white vote">{mediaType.vote_average?.toFixed(1)}</div> }
                        {/* <p className="card-text">Text</p> */}
                    </div>
                </div>
            
            </Link>
        </div>
    </>
}
