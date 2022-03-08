import React from 'react';
import useStore from '../tools/store';
import styles from './search.module.css';

type Props = {};

const SearchType = (props: Props) => {
    const typeSearch = useStore(state => state.searchType);

    const changeTypeSearch = useStore(state => state.changeSearchingType);
    const changeTypeSearchHandler = (value: string) => changeTypeSearch(value);

    return (
      <div className={styles.wrapper}>
            <input 
                placeholder='Search by type'
                type='text' 
                className={styles.searchInput} 
                value={typeSearch} 
                onChange={(e) => changeTypeSearchHandler(e.target.value)}
            />
            <button 
                className={`${styles.clearInput} ${typeSearch.length > 0 ? '' : styles.clearInputHidden}`}
                onClick={() => changeTypeSearchHandler('')}
            >
                X
            </button>
      </div>
    )
};

export default SearchType;