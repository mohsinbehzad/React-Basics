import PropTypes from 'prop-types'

function Players(props) {
    return (
        <>
            <div className="box">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>isPlayer: {props.isPlayer ? "yes" : "no"}</p>
            </div>
        </>
    )
}

// first install "npm install prop-types" in terminal
Players.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isPlayer: PropTypes.bool,
}

export default Players

// prop Types: A mechanism that ensures that the passed value is of correct datatype
// age: PropTypes.number