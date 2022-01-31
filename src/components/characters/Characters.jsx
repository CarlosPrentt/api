import React, { useState, useEffect } from "react";
import Button from "./button/Button";
import Character from "./character/Character";
// import { characterList } from "./character/CharacterList";
import './Characters.css'

const Characters = () => {
  const [characters, setCharacters ] = useState([]);
  const [info, setInfo] = useState([]);
  const url = "https://rickandmortyapi.com/api/character"

  const fetchApi = async (url) =>{
    const res = await fetch(url);
    const characterJSON = await res.json();
    const { results, info } = await characterJSON
    setInfo(info)
    setCharacters(results)
   
  }

  const onNext = () =>{
    fetchApi(info.next)
    console.log(info.next);
  }

  const onPrev = () =>{
    fetchApi(info.prev)
    console.log(info.prev);
  }

  const onMale =() =>{
    fetchApi("https://rickandmortyapi.com/api/character/?gender=MALE")
  }
  const onFemale =() =>{
    fetchApi("https://rickandmortyapi.com/api/character/?gender=FEMALE")
  }
  const onGenderless =() =>{
    fetchApi("https://rickandmortyapi.com/api/character/?gender=GENDERLESS")
  }
  const onUnknown =() =>{
    fetchApi("https://rickandmortyapi.com/api/character/?gender=UNKNOWN")
  }

  useEffect(() =>{
    fetchApi(url)
  }, [])

  return(
       <div className='container_cards'>
         <Button name="Prev" onChange={onPrev} page={info.prev}/>
         <Button name="Next" onChange={onNext} page={info.next}/>
         <Button name="Filter Male" onChange={onMale} page={true}/>
         <Button name="Filter Female" onChange={onFemale} page={true}/>
         <Button name="F-Genderless" onChange={onGenderless} page={true}/>
         <Button name="Filter Unknown" onChange={onUnknown} page={true}/>
           {characters.map(
             (character) => (
                <Character
                  key={character.id}
                  name={character.name}
                  avatar={character.image}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                />)
              )}
       </div>
       );
}

export default Characters;
