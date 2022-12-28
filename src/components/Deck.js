import { useSelector } from "react-redux"
import ButtonDeck from "./ButtonDeck"
import PokemCard from "./PokemCard"

const Deck = ({ openDeck, setOpenDeck }) => {

    const { deck } = useSelector(state => state.pokemon)

    let baseExperience = 0
    deck.forEach(pokemon => {
        baseExperience += pokemon.base_experience
    })


    return (
        <div className="flex flex-col justify-center items-center gap-y-10">
            <h1 className="text-6xl font-extrabold font-permanent text-white mt-10">My Deck</h1>
            <ButtonDeck pokemon={true} openDeck={openDeck} setOpenDeck={setOpenDeck} />
            <div className="flex gap-x-1 text-xl">
                <span className="font-semibold">Total base experience</span>
                <span>{baseExperience}</span>
            </div>
            <div className="flex justify-center flex-wrap gap-10 p-3">
                {
                    deck?.map(p =>
                        <PokemCard key={p.id} data={p} />
                    )
                }
            </div>
        </div>
    )
}

export default Deck