import { BrowserRouter, Routes, Route } from "react-router-dom"
import DayOne from './pages/weekOne/DayOne'
import Navbar from './Navbar'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* JSX Comment */}
        <Route index element={<Navbar />} />
        <Route path='/dayOne' element={<DayOne />} />
      </Routes>
    </BrowserRouter>
    </>
   
  )
}


