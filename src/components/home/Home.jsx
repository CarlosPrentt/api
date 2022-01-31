import React from 'react';

import './Home.css'

const Home = () => {
  return (
    <article id='principalArticle'>
    <div className='image'>
        <img 
        src='https://m.media-amazon.com/images/I/71EGMgAho1L._CR0,521,986,986_UX256.jpg' 
         alt='Rick and Morty Giff'/>

    </div>
    <div className='description'>
        <h1>Rick and Morty</h1>
        <p>Es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim. La serie sigue las desventuras de un científico, Rick, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Roiland es el encargado de darle voz a Rick y a Morty, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke. <br/>La serie se originó por un cortometraje rudimentario animado por Roiland para el festival de cine Channel 101 llamado Doc and Mharti, una parodia de los principales protagonistas de Back to the Future. Cuando la cadena NBC despidió a Harmon en 2013 por discusiones entre él y los ejecutivos de la serie que había creado, Community, él y Roiland desarrollaron una serie basada en los personajes ya creados por Roiland</p>
    </div>
</article>
  );
}

export default Home;
