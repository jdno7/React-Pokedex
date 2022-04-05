import Pokecard from "./Pokecard";
import "./Pokedex.css"

const Pokedex = (props) => {
    return (
        <div className="Pokedex">
        {props.values.map(p => <Pokecard values={p}/>)}
    </div>
    )
}

export default Pokedex