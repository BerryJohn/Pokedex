import React, { useEffect, useState } from 'react';
import './app.css';
import PokemonList from './PokemonList/PokemonList';
import Search from './Search/Search';

const App = () => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [searchMode, setSearchMode] = useState<boolean>(false);
    
    const changeThemeHandler = () => {
        localStorage.setItem('darkTheme', `${!darkTheme}`);
        setDarkTheme(!darkTheme);
    };
    
    const changeSearchModeHandler = () => setSearchMode(!searchMode);

    useEffect(() => {
        if (localStorage.getItem('darkTheme') === null) {
            localStorage.setItem('darkTheme', 'false');
        }
        else {
            const darkThemeStorage = JSON.parse(localStorage.getItem('darkTheme') || 'false');
            setDarkTheme(darkThemeStorage)
        }
    }, []);

    return (
        <div className={`container ${searchMode && 'searchModeEnabled'}`} data-theme={darkTheme && 'dark'}>
            <button className='button themeButton' onClick={changeThemeHandler}>
                {darkTheme ? '☀️' : '🌙'}
            </button>
            <button className='button searchButton' onClick={changeSearchModeHandler}>
                🔎
            </button>
            <div className="test">
                <Search />    
                <Search />    
            </div>
            <PokemonList />     
        </div>
    );
}

export default App;
