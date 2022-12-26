import useApiQueries from "./useApiQueries";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemCard from "./PokemCard";

const Pokemon = () => {

    const { pokemon, dataScroll, setDataScroll, getPokemonData, searchPokemon } = useApiQueries()

    const fetchPokemonScroll = () => {
        getPokemonData()
        dataScroll.pokemonNum === pokemon.length && setDataScroll({ ...dataScroll, hasMore: false })
        setDataScroll({ ...dataScroll, offset: dataScroll.offset + 30 })
    }

    return (
        <div>
            <InfiniteScroll
                dataLength={pokemon?.length}
                next={fetchPokemonScroll}
                hasMore={dataScroll.hasMore}
                className={'flex justify-center flex-wrap gap-10 p-5'}
                loader={'Loading...'}
                endMessage={<div className="font-bold h-10 bg-gradient-to-r from-white via-green-400 to-white text-white flex justify-center items-center"><span>Yay! Tutti i dati sono mostrati</span></div>}
            >
                {
                    pokemon.map(p =>
                        <PokemCard key={p.id} data={p} />
                    )
                }
            </InfiniteScroll>
        </div>
    )
}

export default Pokemon