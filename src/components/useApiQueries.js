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

    const getPokemonData = async () => {
        try {
            const pokemonList = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${dataScroll.perPage}&offset=${dataScroll.offset}`)
            let pokemonDetails = pokemonList.data.results?.map(async p => {
                const pokemon = await axios.get(p.url)
                return {
                    id: pokemon.data.id,
                    name: pokemon.data.name,
                    base_experience: pokemon.data.base_experience,
                    image: pokemon.data.sprites.other["official-artwork"].front_default,
                    abilities: pokemon.data.abilities,
                    types: pokemon.data.types
                }
            })
            pokemonDetails = (await Promise.all(pokemonDetails)).map((p) => p);
            dispatch(getPokemon([...pokemon, ...pokemonDetails]))
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

    //to get first 30th pokemon
    useEffect(() => {
        getPokemonData()
    }, [])

    return { pokemon, dataScroll, setDataScroll, getPokemonData, searchPokemon }
}

export default useApiQueries