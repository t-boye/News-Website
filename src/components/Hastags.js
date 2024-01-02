import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Hastags = () => {
 
    return (
        <>
            <div className="hashTag">
                <ul className="nav justify-content-center" id="ulOfHashTag">
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="/general">GENERAL</Link>
                    </li>
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="/business">BUSINESS</Link>
                    </li>
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="sports">SPORTS</Link>
                    </li>
                   
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="/technology">TECHNOLOGY</Link>
                    </li>
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="/health">HEALTH</Link>
                    </li>
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="/science">SCIENCE</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Hastags
