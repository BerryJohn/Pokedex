import create from 'zustand';

type BearsState = {
    searchName: string;
    searchType: string;
    changeSearchingName: (value: string) => void;
    changeSearchingType: (value: string) => void;
};

const useStore = create<BearsState>(set => ({
    searchName: '',
    searchType: '',
    changeSearchingName: (value) => set(state =>({searchName: value})),
    changeSearchingType: (value) => set(state =>({searchType: value})),
}));

export default useStore;