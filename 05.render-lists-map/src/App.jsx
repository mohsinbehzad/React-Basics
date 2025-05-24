import Fruits from "./Fruits"
import FruitMap from "./FruitMap"
import Lists from "./Lists"

function App() {
  const vegetables = [
    { id: 1, name: "Carrot", calories: 67 },
    { id: 2, name: "Potatoe", calories: 85 },
    { id: 3, name: "Tomatoe", calories: 55 },
    { id: 4, name: "Spinach", calories: 80 },
    { id: 5, name: "Cucumber", calories: 45 },
  ]

  const fruits = [
    { id: 6, name: "apple", calories: 110 },
    { id: 7, name: "banana", calories: 90 },
    { id: 8, name: "mangoe", calories: 120 },
    { id: 9, name: "orange", calories: 70 },
    { id: 10, name: "pineapple", calories: 85 }
  ]


  return (
    <>
      <Fruits></Fruits>
      <FruitMap></FruitMap>
      <Lists item={vegetables} category="Vegetables"></Lists>
      <hr />
      <Lists item={fruits} category="Fruits"></Lists>
    </>
  )
}

export default App
