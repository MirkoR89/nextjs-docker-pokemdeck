import { useDispatch } from "react-redux"
import { clearFilterPokemon } from "../state/actions/pokemonActions"

const ButtonDeck = ({ openDeck, setOpenDeck, pokemon }) => {

    const dispatch = useDispatch()

    const handleReturn = () => {
        setOpenDeck(!openDeck)
        dispatch(clearFilterPokemon())
    }

    return (
        <button onClick={handleReturn} className="mr-3 cursor-pointer rounded-md border shadow-sm px-3.5 py-1.5 bg-[#2775BB] hover:bg-[#F8C601] font-bold text-white text-2xl focus:outline-none transform transition-all duration-150 ease-in-out focus:scale-95 w-fit uppercase">
            {pokemon ? 'back' : 'deck'}
        </button>
    )
}

export default ButtonDeck