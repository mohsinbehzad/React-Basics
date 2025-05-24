function Player() {

    const player1 = "Sergio Ramos"
    const player2 = "Marcelo"
    return (
        <>
            <hr />
            <ul>
                <li>Ronaldo</li>
                <li>{player1}</li>
                <li>{player2.toUpperCase()}</li>
            </ul>
        </>
    );
}

export default Player