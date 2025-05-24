function Lists(props) {
    const itemsList = props.item;

    const listItems = itemsList.map((item) => <li key={item.id}>{item.name}: {item.calories}</li>)

    return (
        <>
            <h1>{props.category}</h1>
            <ol>{listItems}</ol>
        </>
    )
}

export default Lists