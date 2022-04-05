import './Pokecard.css'

const Pokecard = (props) => {
    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{props.values.name}</div>
            <div className="Pokecard-image"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.values.id}.png`} alt=""></img></div>
            <div className="Pokecard-type">Type: {props.values.type}</div>
            <div className="Pokecard-exp">EXP: {props.values.base_experience}</div>
        </div>
    )
}

export default Pokecard