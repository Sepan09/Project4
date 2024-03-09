import { Outlet } from 'react-router-dom'
import Navbar from "./component/navbar";
import './App.css'

function App() {

  return (
    <>
    <div>
    <Navbar />
    <Outlet />
    </div>
    </>
  )
}

export default App
