import { useState, useEffect } from 'react'
// import Footer from "./components/Footer"
import Main from "./components/Main"


function App() {
  const [data, setData] = useState(null)
  
  useEffect(() => {

    async function fetchApiData() {
      const API_KEY = import.meta.env.VITE_API_KEY
      const query = 'q=' + 'Sofia'
      const url = 'http://api.openweathermap.org/data/2.5/weather?' + query + API_KEY
      
      try {
        const response = await fetch(url)

        if (!response.ok) {
           throw new Error(`Failed to fetch data due to an error: ${response.status}`);
           
        }
        const apiData = await response.json()
        setData(apiData)
        console.log(apiData)

      } catch (error) {
        console.log(error)
      }
    }
    fetchApiData()
  }, [])
  
  return (
    <>
      {data ? (<Main data={data}/>) : (
        <div>Data not found</div>)}
    </>
  )
}

export default App
