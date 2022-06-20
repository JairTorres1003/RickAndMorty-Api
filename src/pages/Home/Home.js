/* eslint-disable jsx-a11y/alt-text */
// import React, { useEffect, useState } from 'react'
import React from 'react'
import episodes from '../../episodes.png'
import locations from '../../locations.png'
// import Characters from '../Characters/Characters'
// import Episodes from '../Episodes/Episodes'
// import Locations from '../Locations/Locations'

import "./Home.css"



function Home() {
    // const [listApi, setListApi] = useState([])

    // useEffect(() => {
    //     fetch("https://rickandmortyapi.com/api/")
    //         .then((response) => response.json())
    //         .then((data) => setListApi(data))
    //         .catch((err) => console.info(err))
    // }, [])

    // console.info(listApi)

    return (
        <div className="Home">
            <section className='Home__section' id='Home__characters' onClick={HomeCharacters}>
                <h2 className='Home__section__title'>Personajes</h2>
                <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className='Home__section__image' alt='characters' />

            </section>
            <section className='Home__section' id='Home__episodes' onClick={HomeEpisodes}>
                <h2 className='Home__section__title'>Episodios</h2>
                <img src={episodes} className='Home__section__image' alt='episodes' />
            </section>
            <section className='Home__section' id='Home__locations' onClick={HomeLocations}>
                <h2 className='Home__section__title'>Lugares</h2>
                <img src={locations} className='Home__section__image' alt='locations' />
            </section>
        </div>
    );
    
}
function HomeCharacters() {
    window.location.href = window.location.href + 'characters'
}
function HomeEpisodes() {
    alert('episodes')
}
function HomeLocations() {
    alert('locations')
}
export default Home;
