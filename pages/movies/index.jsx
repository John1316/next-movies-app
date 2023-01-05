import axios from "axios";
import Head from "next/head";
import { useState, useEffect } from "react";
import Items from "../../shared-components/Items";

export default function Home() {
  const [isLoading, setIsloading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  // loading get trending movies
  async function getTrending(media_type, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${media_type}/week?api_key=64d768e4d0a647d938254dd3d191863f`
    );
    callback(data.results);
  }
  useEffect(() => {
    getTrending("movie", setTrendingMovies);

  }, []);

  return (
    <>
      <Head>
        <title>Noxe | Movies</title>
      </Head>

      <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
          <div className="">
            <div className="brdr w-25 mb-3"></div>
            <h2>
              Trending movies <br />
              TO watch right now
            </h2>
            <p>Most watched movies</p>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>
        {trendingMovies.length > 0 ? (
          trendingMovies
            .slice(0, 16)
            .map((trendingMovies, index) => (
              <Items key={index} mediaType={trendingMovies} />
            ))
        ) : (
          <div className="loader">
            <div className="lds-default">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
