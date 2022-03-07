import React from 'react';
import Pokemon from './Pokemon';
import styles from  './pokemonList.module.css';

const PokemonList = () => {
  return (
    <div className={styles.wrapper}>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/1/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/2/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/3/'/>
        <Pokemon pokemonUrl='https://pokeapi.co/api/v2/pokemon/266/'/>

    </div>
  );
}

export default PokemonList;