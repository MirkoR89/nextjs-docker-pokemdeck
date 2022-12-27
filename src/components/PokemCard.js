import { useDispatch, useSelector } from "react-redux"
import { addCard } from "../state/actions/pokemonActions"

const PokemCard = ({ data, pokemonList, id }) => {

    const dispatch = useDispatch()
    const { deck } = useSelector(state => state.pokemon)

    console.log(id);



    return (
        <div className="wrapper bg-gray-400 antialiased text-gray-900 rounded-lg relative">
            <div>
                <img src={data.image} alt="pokemon-image" className="w-full object-cover object-center" />
                {
                    pokemonList ?
                        !deck.some(card => card.id === id) ?
                            <button onClick={() => dispatch(addCard(data))} className="absolute right-2 top-2 rounded-full border-2 shadow-sm px-3.5 py-2 bg-green-400 font-bold text-white hover:bg-green-300 focus:outline-none transform transition-all duration-150 ease-in-out focus:scale-95 uppercase">
                                &#43;
                            </button> :
                            <div className="absolute right-2 top-2 rounded-full border-2 shadow-sm px-3.5 py-2 bg-blue-400 font-bold text-white">
                                &#10003;
                            </div> :
                        <></>
                }
                <div className="relative px-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex justify-center items-center gap-x-5">
                            <div className="mt-1 text-xl font-semibold uppercase leading-tight text-center truncate">{data.name}</div>
                            <div className="mt-1 text-xl leading-tight text-center">{data.base_experience}</div>
                        </div>

                        <div className="mt-5 capitalize">
                            <span className="font-semibold mr-2">Abilities</span>
                            {
                                data.abilities?.map((ability, i) =>
                                    <span key={ability.slot} className="text-gray-600 text-sm capitalize">{ability.ability.name}{data.abilities.length - 1 !== i && ', '}</span>
                                )

                            }
                        </div>
                        <div className="mt-1 capitalize">
                            <span className="font-semibold mr-2">Type</span>
                            {
                                data.types?.map((type, i) =>
                                    <span key={type.slot} className="text-gray-600 text-sm capitalize">{type.type.name}{data.types.length - 1 !== i && ', '}</span>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemCard