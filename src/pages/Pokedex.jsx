import React, { useState } from 'react';
import PokeContainer from "../components/pokedex/PokeContainer";
import HeaderPoke from '../components/header/HeaderPoke';
import "./styles/pokedex.css";
import FooterPoke from '../components/footer/FooterPoke';


const Pokedex = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
    const [FormUrl, setFormUrl] = useState(url)
    console.log(FormUrl, "datos")
  return (
    <div className='container-pokedex'>
      <HeaderPoke />
     <div>
      
     </div>
      <PokeContainer FormUrl={FormUrl}/>
      <FooterPoke /> 
    </div>
  )
}

export default Pokedex