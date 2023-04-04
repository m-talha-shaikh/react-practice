import React from 'react'
import {Link} from 'react-router-dom'
// import DayOne from './pages/weekOne/DayOne'

export default function Navbar(){
    return (
        <>
            <h2>Navbar</h2>
            <Link to="/dayOne">Day One</Link>
            {/* <Link to="/dayOne">Day One</Link>
            <Link to="/dayOne">Day One</Link>
            <Link to="/dayOne">Day One</Link>
            <Link to="/dayOne">Day One</Link> */}
        </> 
    )
}