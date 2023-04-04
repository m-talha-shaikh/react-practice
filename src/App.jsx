import { BrowserRouter, Routes, Route } from "react-router-dom"
import DayOne from './pages/weekOne/DayOne'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* JSX Comment */} 
        <Route path='/weekOne/dayOne' element={<DayOne />} />
      </Routes>
    </BrowserRouter>
  )
}


