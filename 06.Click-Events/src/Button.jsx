function Button() {

    // const handleClick = (()=> console.log("clicked"))
    let count = 0;

    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} clicked me ${count} times`);
        }
        else {
            console.log(`${name} don't click me`);
        }
    }
    return (
        <button className="btn" onClick={() => handleClick('Mohsin')}>Click me</button>
    );
}

export default Button