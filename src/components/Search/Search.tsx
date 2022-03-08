import React, { useState } from 'react';
import styles from './search.module.css';

type Props = {};

const Search = (props: Props) => {
    const [inputText, setInputText] = useState<string>('');
    

    return (
      <div className={styles.wrapper}>
            <input 
                placeholder='Search by name'
                type='text' 
                className={styles.searchInput} 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)}
            />
            <button 
                className={`${styles.clearInput} ${inputText.length > 0 ? '' : styles.clearInputHidden}`}
                onClick={() => setInputText('')}
            >
                X
            </button>
      </div>
    )
};

export default Search;