
function FruitMap() {
    const fruits = [
        { id: 1, name: "apple", calorie: 110 },
        { id: 2, name: "banana", calorie: 90 },
        { id: 3, name: "mangoe", calorie: 120 },
        { id: 4, name: "orange", calorie: 70 },
        { id: 5, name: "pineapple", calorie: 85 }
    ]

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical Order
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Rverse Alphabeitca Order
    // fruits.sort((a, b) => a.calorie - b.calorie); // Numerical order
    // fruits.sort((a,b) => b.calorie - a.calorie); // reverse numerical order

    // const lowCalFruit = fruits.filter((fruit)=> fruit.calorie < 100)

    // const hgihCalFruit = fruits.filter((fruit) => fruit.calorie > 100)

    const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calorie}</b></li>)

    return (
        <>
            <ol>{listItems}</ol>
            <hr />
        </>
    )
}
export default FruitMap