import React, { useEffect, useState } from 'react';
import './app.css';
import PokemonList from './PokemonList/PokemonList';
import SearchName from './Search/SearchName';
import SearchType from './Search/SearchType';
import useStore from '../tools/store';

const App = () => {
    //States
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [searchMode, setSearchMode] = useState<boolean>(false);
    //Zustand
    const getPokemons = useStore(state => state.fetch);
    const getApi = useStore(state => state.pokeApi);
    
    //UseEffects
    useEffect(() => {
        if (localStorage.getItem('darkTheme') === null) {
            localStorage.setItem('darkTheme', 'false');
        }
        else {
            const darkThemeStorage = JSON.parse(localStorage.getItem('darkTheme') || 'false');
            setDarkTheme(darkThemeStorage)
        }
        getPokemons();
    }, []);
    
    //Handlers
    const loadPokemonsHandler = () => {
        getPokemons();
    };
    const changeSearchModeHandler = () => setSearchMode(!searchMode);

    const changeThemeHandler = () => {
        localStorage.setItem('darkTheme', `${!darkTheme}`);
        setDarkTheme(!darkTheme);
    };
    
    return (
        <div className={`container ${searchMode && 'searchModeEnabled'}`} data-theme={darkTheme && 'dark'}>
            <button className='button themeButton' onClick={changeThemeHandler}>
                {darkTheme ? '☀️' : '🌙'}
            </button>
            <button className='button searchButton' onClick={changeSearchModeHandler}>
                🔎
            </button>
            <div className="searchBar">
                <SearchName />    
                <SearchType />    
            </div>
            <PokemonList />
            {/* Check if another sets of pokemons are avaiable */}
            {getApi ? <button onClick={loadPokemonsHandler} className='readButton'>read more pokemons!</button> : ''}
        </div>
    );
}

export default App;
