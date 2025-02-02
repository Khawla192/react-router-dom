import { Link } from 'react-router';

const PokemonList = (props) => {
    return (
        <>
            <h2>Pokemon</h2>
            <ul>
                {props.pokemon.map(poke => (
                    <li key={poke.name}>
                        <Link to={`/pokemon/${poke._id}`}>
                            {poke.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default PokemonList;