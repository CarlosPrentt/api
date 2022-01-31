import React, { useState, useEffect } from "react";
import "./Episode.css";

const Episode = (props) => {
    const { name, airDate, episode, charactersList } = props;
    const [character, setCharacter] = useState([])
    const [display, setDisplay] = useState("none")

    const apiMap = async (url) => {
      url.map(async (items) => {
        const res = await fetch(items);
        const characterJSON = await res.json();
        setCharacter((prevState) => [...prevState, characterJSON]);
      });
    };

    const onShow= ()=>{
      if(display==="none"){
      display.slice(0);
      setDisplay("flex")}
      else if(display ==="flex"){
        display.slice(0);
        setDisplay("none")
      }else {display.slice(0);
        setDisplay(display)}
    }

    useEffect(()=>{
      apiMap(charactersList)
    }, [charactersList]);

    return (
      <div className="episodeCard">
        <div className="episodieInfo">
          <h1>Name: {name}</h1>
          <h3>Episode: {episode}</h3>
          <p>Date: {airDate}</p>
          <button className="btn-characters" onClick={onShow}>Characters</button>
          <div className="charactersCard" style={{display: display}}>
              {character.map((item) => (
                <img className="img-character" src={item.image} alt={item.name} />
              ))}
          </div>
        </div>
      </div>
    );
};

export default Episode;
