import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import PokeCard from './PokeCard';
import SortingInput from './SortingInput';
import "./styles/pokeContainer.css";

const PokeContainer = ({ FormUrl }) => {
  const [pokemons, getAllPokemons] = useFetch(FormUrl);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' para ascendente, 'desc' para descendente

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons, FormUrl]);

  const sortedPokemons = pokemons?.results?.slice().sort((a, b) => {
    const idA = parseInt(a.url.split('/').slice(-2, -1)[0]);
    const idB = parseInt(b.url.split('/').slice(-2, -1)[0]);

    return sortOrder === 'asc' ? idA - idB : idB - idA;
  });

  const handleSortOrderChange = (selectedOrder) => {
    setSortOrder(selectedOrder);
  };

  return (
    <div>
      <SortingInput sortOrder={sortOrder} handleSortOrderChange={handleSortOrderChange} />

      <div className='poke-container'>
        {sortedPokemons?.map((pokemon) => (
          <PokeCard key={pokemon.url} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default PokeContainer;
