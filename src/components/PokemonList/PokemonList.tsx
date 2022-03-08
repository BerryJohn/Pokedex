import React from 'react';
import useStore from '../tools/store';
import Pokemon from './Pokemon';
import styles from  './pokemonList.module.css';

const PokemonList = () => {

  const loadedPokemons:any = useStore(state => state.pokemons);

  return (
    <div className={styles.wrapper}>
        {loadedPokemons?.map((el:any) => <Pokemon pokemonUrl={el.url} key={el.url}/>)}
    </div>
  );
}

export default PokemonList;