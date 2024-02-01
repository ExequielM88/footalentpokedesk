import { useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import "./styles/pokecard.css";



const PokeCard = ({ url }) => {

  const [pokemon, getPokeById] = useFetch(url);
    
  
  useEffect(() => {
      
    getPokeById(url);
  }, [getPokeById, url]);
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokedex/${pokemon.name}`);
  };
  console.log(pokemon)
  return (
    <article
      onClick={handleClick}
      className={`pokemon border-${pokemon?.types[0].type.name}`}
    >
      <header className={`pokemon_header bg-${pokemon?.types[0].type.name}`}>
        <img
          className="pokemon_sprite"
          src={pokemon?.sprites.other['official-artwork'].front_default}
          alt=""
        />
      </header>
      <section className="pokemon_body">
        <h3 className="pokemon_name">{pokemon?.name}</h3>
        <p className='poke_id'>{pokemon?.id}</p>
        <ul className="pokemon__info__ul">
           <li className=".pokemon_weight_label">height</li>
           <li className=".pokemon_weight_label">weight</li>
           <span className="pokemon__value">{pokemon?.height}</span>
           <span className="pokemon__value">{pokemon?.weight}</span>
          </ul>
      </section>

     
    </article>
  );
};

export default PokeCard;

