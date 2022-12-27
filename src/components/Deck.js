import { useSelector } from "react-redux"
import ButtonDeck from "./ButtonDeck"
import PokemCard from "./PokemCard"

const Deck = ({ openDeck, setOpenDeck }) => {

    const { deck } = useSelector(state => state.pokemon)

    console.log(deck);


    return (
        <div className="flex flex-col justify-center items-center gap-y-10">
            <h1 className="text-6xl font-bold">My Deck</h1>
            <ButtonDeck pokemon={true} openDeck={openDeck} setOpenDeck={setOpenDeck} />
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