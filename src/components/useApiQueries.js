import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemon } from "../state/actions/pokemonActions"


const useApiQueries = () => {

    const { pokemon } = useSelector(state => state.pokemon)
    const [dataScroll, setDataScroll] = useState({
        perPage: 30,
        offset: 0,
        hasMore: true,
        pokemonNum: null
    })

    const dispatch = useDispatch()

    //Get first 20 pokemon
    const getPockemon = async () => {
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0")
            dispatch(getPokemon(res.data.results))
            setDataScroll({ ...dataScroll, pokemonNum: res.data.count })
        } catch (err) {
            if (err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } else {
                console.log(`Error: ${err.message}`)
            }
        }
    }

    const getPokemonScroll = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${dataScroll.perPage}&offset=${dataScroll.offset}`)
            console.log(res);
            dispatch(getPokemon([...pokemon, ...res.data.results]))
        } catch (err) {
            if (err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } else {
                console.log(`Error: ${err.message}`)
            }
        }
    }

    const searchPokemon = async (keyword) => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${keyword}`)
            dispatch(getPokemon([res.data.results]))
        } catch (err) {
            if (err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } else {
                console.log(`Error: ${err.message}`)
            }
        }
    }

    useEffect(() => {
        getPockemon()
    }, [])

    return { pokemon, dataScroll, setDataScroll, getPockemon, getPokemonScroll, searchPokemon }
}

export default useApiQueries