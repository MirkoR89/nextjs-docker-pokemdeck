import useApiQueries from "./useApiQueries";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemCard from "./PokemCard";
import { Searchbar } from "./Searchbar";
import Loader from "./Loader";
import { useState } from "react";
import Deck from "./Deck";
import ButtonDeck from "./ButtonDeck";
import Notification from "./Notification";

const Pokemon = () => {

    const { pokemon, pokemonFiltered, dataScroll, setDataScroll, getPokemonData, getAllPockemon } = useApiQueries()

    const [openDeck, setOpenDeck] = useState(false)

    const fetchPokemonScroll = () => {
        getPokemonData()
        dataScroll.pokemonNum === pokemon.length && setDataScroll({ ...dataScroll, hasMore: false })
        setDataScroll({ ...dataScroll, offset: dataScroll.offset + 30 })
    }

    return (
        <div className="bg-blue-200 w-full h-full flex flex-col gap-y-10 items-center">
            {
                !openDeck ?
                    <>
                        <div className="flex flex-col items-center mt-10">
                            <img src="./pokemon_text.png" alt="pokemon-text" className="h-52" />
                            <h1 className="text-6xl font-extrabold font-permanent text-white">Cards</h1>
                        </div>
                        <div className="w-full flex items-center justify-end mr-96">
                            <ButtonDeck openDeck={openDeck} setOpenDeck={setOpenDeck} />
                            <Searchbar getAllPockemon={getAllPockemon} />
                        </div>
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
                                            <PokemCard pokemonList={true} key={p.id} data={p} id={p.id} />
                                        )
                                    }
                                </InfiniteScroll> :
                                <div className="flex justify-center flex-wrap gap-10 p-3">
                                    {
                                        pokemonFiltered?.map(p =>
                                            <PokemCard pokemonList={true} key={p.id} data={p} id={p.id} />
                                        )
                                    }
                                </div>
                        }
                        <button onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })} className="fixed bottom-10 right-10 rounded-full border-2 shadow-sm px-5 py-2 bg-[#2775BB] hover:bg-[#F8C601] font-bold text-white focus:outline-none text-3xl transform transition-all duration-150 ease-in-out focus:scale-95 uppercase">
                            &#x2191;
                        </button>
                    </> :
                    <Deck openDeck={openDeck} setOpenDeck={setOpenDeck} />
            }
        </div>
    )
}

export default Pokemon