import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceLists/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneInfo from './components/PhoneInfo/PhoneInfo'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-600'>Helloo from tailwind</h1>  
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    <PhoneInfo></PhoneInfo>
    </div>
  )
}

export default App
