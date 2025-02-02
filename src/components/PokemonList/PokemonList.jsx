const PokemonList = (props) => {
    return (
        <>
        <h2>Pokemon</h2>
        <ul>
            {props.pokemon.map(poke => (
                <li key={poke._id}>
                    <h2>{poke.name}</h2>
                </li>
            ))}
        </ul>
        </>
    );
};

export default PokemonList;