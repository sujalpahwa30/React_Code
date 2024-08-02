import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

// let myObj = {
//   name: 'sujal',
//   age: 19,
//   city: 'rohtak'
// }

let newArr = [1,2,3,4,5,6,7,8];

  return (
    <>
      <h1 className = 'text-3xl bg-green-500 p-3 rounded-md'> 
        Vite With Tailwind 
      </h1>
      <Card username = 'sujal' myArr = {newArr} />
      <Card username = 'json' post = 'Staff Engg.' />
      <Card />
    </>
  )
}

export default App
