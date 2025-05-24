
function UserGreeting(props) {

    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else {
    //     return <h3>Log in to continue</h3>
    // }

    const welcome = <h2 className="welcome-msg">Welcome {props.username}</h2>
    const logIn = <h2 className="login-prompt">Please log in to continue</h2>

    return (props.isLoggedIn ? welcome : logIn)
}

export default UserGreeting