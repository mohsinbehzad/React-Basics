function Fruits() {
    const fruits = ['apple', 'mangoe', 'banana', 'orange', 'pineapple']


    // In real-world React code, you'd want to add a unique key to each list item for performance reasons
    // const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
    // or if fruits are unique then
    const listItems = fruits.map(fruit => <li key={fruit}>{fruit}</li>)

    return (
        <>
            <h2>Rendering Array Lists</h2>
            <ol>{listItems}</ol>
            <hr />
        </>
    );
}

export default Fruits