import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemon, getAllPockemon, getAllPokemon } from "../state/actions/pokemonActions"

const useApiQueries = () => {

    const { pokemon, pokemonFiltered } = useSelector(state => state.pokemon)
    const [dataScroll, setDataScroll] = useState({
        perPage: 30,
        offset: 0,
        hasMore: true,
        pokemonNum: null,
        download: true
    })

    const dispatch = useDispatch()

    const getPokemonData = async () => {
        try {
            const pokemonList = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${dataScroll.perPage}&offset=${dataScroll.offset}`)
            const allPokemon = dataScroll.download && await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${pokemonList.data.count}`)
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
            let allPokemonDetails = dataScroll.download && allPokemon.data.results?.map(async p => {
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
            allPokemonDetails = dataScroll.download && (await Promise.all(allPokemonDetails)).map((p) => p);
            dispatch(getPokemon([...pokemon, ...pokemonDetails]))
            dataScroll.download && dispatch(getAllPokemon(allPokemonDetails))
            dataScroll.download && setDataScroll({ ...dataScroll, pokemonNum: pokemonList.data.count, download: false, offset: 30 })

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

    // //to get first 30th pokemon
    useEffect(() => {
        getPokemonData()
    }, [])

    return { pokemon, pokemonFiltered, dataScroll, setDataScroll, getPokemonData, getAllPockemon }
}

export default useApiQueries