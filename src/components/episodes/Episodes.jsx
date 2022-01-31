import React, { useState, useEffect } from 'react';
import Episode from './episode/Episode';
import './Episodes.css'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState([]);
  
    const url = "https://rickandmortyapi.com/api/episode/";
  
    const fetchApi = async (url) => {
      const res = await fetch(url);
      const episodesJSON = await res.json();
      const { results, info } = await episodesJSON;
      setInfo(info);
      setEpisodes(results);
    };
    useEffect(() => {
      fetchApi(url);
    }, []);
  
    return (
      <>
        <div className="Episode">
          {episodes.map((episode) => (
            <Episode
              key={episode.id}
              name={episode.name}
              airDate={episode.air_date}
              episode={episode.episode}
              charactersList={episode.characters}
            />
          ))}
        </div>
      </>
    );
};

export default Episodes;
