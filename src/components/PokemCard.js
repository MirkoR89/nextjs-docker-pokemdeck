const PokemCard = ({ data }) => {

    return (
        <div className="wrapper bg-gray-400 antialiased text-gray-900 rounded-lg">
            <div>
                <img src={data.image} alt="pokemon-image" className="w-full object-cover object-center" />
                <div className="px-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="mt-1 text-xl font-semibold uppercase leading-tight text-center truncate">{data.name}</div>
                        <div className="mt-5 capitalize">
                            <span className="font-semibold mr-2">Abilities</span>
                            {
                                data.abilities.map(ability =>
                                    <span key={ability.slot} className="text-gray-600 text-sm">{ability.ability.name}</span>
                                )

                            }
                        </div>
                        <div className="mt-1 capitalize">
                            <span className="font-semibold mr-2">Type</span>
                            {
                                data.types.map((type, index) =>
                                    <span key={type.slot} className="text-gray-600 text-sm capitalize">{type.type.name} {index < type.type.length - 1 ? ", " : ""}</span>
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