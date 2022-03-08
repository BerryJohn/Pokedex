import React, { useEffect, useState } from 'react';
import styles from './pokemon.module.css';

interface IPokemon{
    pokemonUrl: string;
};

const Pokemon = (props: IPokemon) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [pokemonData, setPokemonData] = useState<any>();
  
    useEffect(() => {
      fetch(props.pokemonUrl)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setPokemonData(result);
          }
        )
    }, [])

    const expandHandler = () => setIsExpanded(!isExpanded);

    if(!isLoaded)
        return (
            <div className={styles.wrapper}>
                <img src="./img/pokeball.png" alt="" className={styles.loader}/>    
            </div>
        );
    else
        return (
        <div className={`${styles.wrapper} ${isExpanded && styles.wrapperExpanded}`} onClick={expandHandler}>
            <div className={styles.pokemonBaseInfo}>
                <h1 className={styles.pokemonName}>
                    {pokemonData?.name}
                </h1>
                <img src={pokemonData?.sprites.other.home.front_shiny} alt="" className={styles.pokemonImg}/>
                <h2 className={styles.pokemonType}>
                    {pokemonData?.types[0].type.name}
                </h2>
            </div>
            <div className={`${styles.pokemonHeight} ${styles.pokemonInfos}`}>
                height
                <p>
                    {pokemonData?.height}
                </p>
            </div>
            <div className={`${styles.pokemonWeight} ${styles.pokemonInfos}`}>
                weight
                <p>
                    {pokemonData?.weight}
                </p>
            </div>
        </div>
        );
}

export default Pokemon;