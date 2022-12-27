import ButtonDeck from "./ButtonDeck"

const Deck = ({ deck, setDeck }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-10">
            <h1 className="text-6xl font-bold">My Deck</h1>
            <ButtonDeck pokemon={true} deck={deck} setDeck={setDeck} />
        </div>
    )
}

export default Deck