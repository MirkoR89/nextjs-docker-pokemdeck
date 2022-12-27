import { useDispatch } from "react-redux"
import { clearFilterPokemon, filterPokemon } from "../state/actions/pokemonActions"

export const Searchbar = () => {

    const dispatch = useDispatch()

    const handleSearch = async e => {
        const keyword = e.target.value
        if (keyword.length > 2) {
            dispatch(filterPokemon(keyword))
        } else {
            dispatch(clearFilterPokemon())
        }
    }

    return (
        <div className="relative">
            <input className="h-10 w-72 bg-white px-2 rounded-lg focus:outline-none focus:border-2 border-2 border-gray-300 focus:border-green-400" type="text" placeholder="Search your pokemon" onChange={e => handleSearch(e)} />
            <img src="/search.svg" alt="icon-search" className="absolute right-3 top-2.5 w-6" />
        </div>
    )
}
