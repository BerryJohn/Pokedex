import React from 'react';
import useStore from '../../tools/store';
import styles from './search.module.css';

const SearchName = () => {
    const nameSearch = useStore(state => state.searchName);

    const changeSearch = useStore(state => state.changeSearchingName);
    const changeSearchHandler = (value: string) => changeSearch(value);

    return (
      <div className={styles.wrapper}>
            <input 
                placeholder='search by name'
                type='text' 
                className={styles.searchInput} 
                value={nameSearch} 
                onChange={(e) => changeSearchHandler(e.target.value)}
            />
            <button 
                className={`${styles.clearInput} ${nameSearch.length > 0 ? '' : styles.clearInputHidden}`}
                onClick={() => changeSearchHandler('')}
            >
                X
            </button>
      </div>
    )
};

export default SearchName;