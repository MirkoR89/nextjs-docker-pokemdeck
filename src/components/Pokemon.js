import useApiQueries from "./useApiQueries";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemCard from "./PokemCard";
import { Searchbar } from "./Searchbar";
import Loader from "./Loader";

const Pokemon = () => {

    const { pokemon, pokemonFiltered, dataScroll, setDataScroll, getPokemonData, getAllPockemon } = useApiQueries()


    const fetchPokemonScroll = () => {
        getPokemonData()
        dataScroll.pokemonNum === pokemon.length && setDataScroll({ ...dataScroll, hasMore: false })
        setDataScroll({ ...dataScroll, offset: dataScroll.offset + 30 })
    }

    return (
        <div className="bg-slate-100 w-full flex flex-col gap-y-10 items-center p-2">
            <h1 className="text-6xl font-bold">Pokemon Cards</h1>
            <Searchbar getAllPockemon={getAllPockemon} />
            {
                pokemonFiltered === null ?
                    <InfiniteScroll
                        dataLength={pokemon?.length}
                        next={fetchPokemonScroll}
                        hasMore={dataScroll.hasMore}
                        className={'flex justify-center flex-wrap gap-10 p-3'}
                        loader={<Loader />}
                        endMessage={<div className="font-bold h-10 bg-gradient-to-r from-white via-green-400 to-white text-white flex justify-center items-center"><span>Yay! Tutti i dati sono mostrati</span></div>}
                    >
                        {
                            pokemon.map(p =>
                                <PokemCard key={p.id} data={p} />
                            )
                        }
                    </InfiniteScroll> :
                    <div className="flex justify-center flex-wrap gap-10 p-3">
                        {
                            pokemonFiltered?.map(p =>
                                <PokemCard key={p.id} data={p} />
                            )
                        }
                    </div>
            }
        </div>
    )
}

export default Pokemon