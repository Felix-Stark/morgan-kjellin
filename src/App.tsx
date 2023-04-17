import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { doc, setDoc } from 'firebase/firestore'
import { db } from './Firebase/firebase-config'

function App() {
  const [test, setTest] = useState('')

  const testDb = () => {
    setDoc(doc(db, 'test', 'testing'), {test})
  }

  return (
    <div className="App">
      <input type="text" onChange={ (e) => setTest(e.target.value) }/>
      <button onClick={testDb}>DB test</button>
    </div>
  )
}

export default App
