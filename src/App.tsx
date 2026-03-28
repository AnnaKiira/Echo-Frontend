import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const  [healthData, setHealthData] = useState(null)

  useEffect(() => {
    console.log(import.meta.env.VITE_BACKEND_URL)
    fetch(`${import.meta.env.VITE_BACKEND_URL}/health`)
      .then(response => response.json())
      .then(data => setHealthData(data))
      .catch(error => console.error('Error fetching health data:', error))
  }, [])
  return (
    <>

    <p>{JSON.stringify(healthData)}</p>
    
    </>
  )
}

export default App
