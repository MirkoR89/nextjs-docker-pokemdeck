import { useDispatch } from "react-redux"
import { clearFilterPokemon } from "../state/actions/pokemonActions"

const ButtonDeck = ({ openDeck, setOpenDeck, pokemon }) => {

    const dispatch = useDispatch()

    const handleReturn = () => {
        setOpenDeck(!openDeck)
        dispatch(clearFilterPokemon())
    }

    return (
        <button onClick={handleReturn} className="mr-3 cursor-pointer rounded-md border shadow-sm px-3.5 py-1.5 bg-green-400 font-bold text-white hover:bg-green-300 focus:outline-none transform transition-all duration-150 ease-in-out focus:scale-95 text-sm w-fit uppercase">
            {pokemon ? 'go back to pokemon' : 'deck'}
        </button>
    )
}

export default ButtonDeck