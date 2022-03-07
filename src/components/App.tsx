import React, { useState } from 'react';
import './app.css';
import PokemonList from './PokemonList/PokemonList';

function App() {
    const [isDark, setIsDark] = useState<boolean>(false);

    const changeThemeHandler = () => {
        setIsDark(!isDark);
    };

    return (
        <div className='container' data-theme={isDark && 'dark'}>
            <button className='themeButton' onClick={changeThemeHandler}>
             {isDark ? '☀️' : '🌙'}
            </button>
            <PokemonList />     
        </div>
    );
}

export default App;
