import React from "react";
import './Character.css'

const Character = (props) => {
  const{avatar, name, status, species, gender, origin}=props
  return (
    <div className="characterCard">
      <div className="characterImage">
        <img src={avatar} alt={'image '+name}/>
      </div>
      <div className="characterInfo">
        <h1>{name}</h1>
        <h3>{status}</h3>
        <h3>{species}</h3>
        <p>{gender}</p>
        <p>{origin}</p>
      </div>
    </div>
  );
};

export default Character;
