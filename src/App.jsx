import { BrowserRouter, Routes, Route } from "react-router-dom"
import DayOne from './components/weekOne/dayOne/DayOne'
import DayTwo from './components/weekOne/dayTwo/DayTwo'
import Navbar from './Navbar'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* JSX Comment */}
        <Route index element={<Navbar />} />
        <Route path='/dayOne' element={<DayOne />} />
        <Route path='/dayTwo' element={<DayTwo />} />
      </Routes>
    </BrowserRouter>
    </>
   
  )
}


