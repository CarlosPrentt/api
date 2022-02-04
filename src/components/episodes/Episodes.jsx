import React, { useState, useEffect } from 'react';
import Button from '../characters/button/Button';
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

    const onNext = () =>{
      fetchApi(info.next)
      console.log(info.next);
    }
  
    const onPrev = () =>{
      fetchApi(info.prev)
      console.log(info.prev);
    }

    useEffect(() => {
      fetchApi(url);
    }, []);

    
  
    return (
      <>
        <Button name="Prev" onChange={onPrev} page={info.prev}/>
        <Button name="Next" onChange={onNext} page={info.next}/>
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
