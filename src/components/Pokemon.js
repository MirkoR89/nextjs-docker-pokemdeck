import axios from "axios";
import useApiQueries from "./useApiQueries";
import InfiniteScroll from "react-infinite-scroll-component";

const Pokemon = () => {

    const { pokemon, dataScroll, setDataScroll, getPockemon, getPokemonScroll, searchPokemon } = useApiQueries()

    const fetchPokemonScroll = () => {
        getPokemonScroll()
        dataScroll.pokemonNum === pokemon.length && setDataScroll({ ...dataScroll, hasMore: false })
        setDataScroll({ ...dataScroll, offset: dataScroll.offset + 30 })
    }

    return (
        <div className="flex flex-col justify-center items-center text-xl font-mono">
            <InfiniteScroll
                dataLength={pokemon?.length}
                next={fetchPokemonScroll}
                hasMore={dataScroll.hasMore}
                className={'w-full'}
                height={300}
                loader={'Loading...'}
                endMessage={<div className="font-bold h-10 bg-gradient-to-r from-white via-green-400 to-white text-white flex justify-center items-center"><span>Yay! Tutti i dati sono mostrati</span></div>}
            >
                {
                    pokemon.map(pok =>
                        <div key={pok.name}>
                            <a href={pok.url}>
                                {pok.name}
                            </a>
                        </div>
                    )
                }
            </InfiniteScroll>
        </div>
    )
}

export default Pokemon