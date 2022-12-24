import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "../state/actions/pokemonActions";

const Pokemon = () => {

    const { pokemon } = useSelector(state => state.pokemon)
    const dispatch = useDispatch()

    const fetchFootballers = async () => {
        await axios.get("https://pokeapi.co/api/v2/pokemon")
            .then((res) => {
                dispatch(getPokemon(res.data.results))
            })
    }

    useEffect(() => {
        fetchFootballers()
    }, [])

    console.log(pokemon)
    return (
        <div className="flex flex-col justify-center items-center text-xl font-mono">
            {
                pokemon.map(pok =>
                    <div>
                        <a href={pok.url}>
                            {pok.name}
                        </a>
                    </div>
                )
            }
        </div>
    )
}

export default Pokemon