import create from 'zustand';

type PokemonState = {
    searchName: string;
    searchType: string;
    pokemons: any[];
    pokeApi: string;
    changeSearchingName: (value: string) => void;
    changeSearchingType: (value: string) => void;
    changeApi: (value: string) => void;
    fetch: () => Promise<void>;
};

const useStore = create<PokemonState>((set,get) => ({
    searchName: '',
    searchType: '',
    pokemons: [],
    pokeApi: 'https://pokeapi.co/api/v2/pokemon',
    changeSearchingName: (value) => set(state =>({searchName: value})),
    changeSearchingType: (value) => set(state =>({searchType: value})),
    changeApi: (value) => set(state =>({pokeApi: value})),
    fetch: async () => {
        const api = get().pokeApi;
        const response:any = await fetch(api);
        const data = await response.json();
        set({pokemons: [...get().pokemons, ...data.results] });
        set({ pokeApi: data.next });
      },
}));

export default useStore;
