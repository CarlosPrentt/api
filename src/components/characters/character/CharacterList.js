export const Rick= JSON.parse(`{
                "key":1,
                "name":"Rick Sanchez",
                "avatar":"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "status":"Alive",
                "species":"Human",
                "gender":"Male",
                "origin":{
                    "name": "Earth",
                    "url": "https://rickandmortyapi.com/api/location/1"}
                }`);

export const Morty = JSON.parse(`{
    "key":2,
    "name":"Morty Smith",
    "avatar":"https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "status":"Alive",
    "specie":"Human",
    "gender":"Male",
    "origin":"Earth"}`);

    export const Summer = JSON.parse(`{
        "key":3,
        "name":"Summer Smith",
        "avatar":"https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "status":"Alive",
        "species":"Human",
        "gender":"Female",
        "origin":{
            "name": "Earth",
            "url": "https://rickandmortyapi.com/api/location/1"}
        }`);

export var characterList = [Rick, Morty, Summer];