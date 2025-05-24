import UserGreeting from "./UserGreeting"

function App() {

  return (
    <>
      <UserGreeting username="Mohsin" isLoggedIn={true}></UserGreeting>
      <UserGreeting username="Mohsin" isLoggedIn={false}></UserGreeting>
    </>
  )
}

export default App
