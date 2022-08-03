import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import { Link } from 'react-router-dom'





function Cards() {

    const { status, statusChangeToggle, token, setToken, handleLogout, name, setName } = useContext(AuthContext)
    console.log(status)

    return (

        <>
            {/* will check if user is logged in or not */}
            {token ?

                <div className="Cards">
                    <h4 style={{ padding: "10px", backgroundColor: "Black", borderRadius: "10px", fontStyle: "italic", cursor: "pointer", color: "white" }}>Log In as ,{name}</h4>

                    <h4 style={{ padding: "10px", backgroundColor: "Black", borderRadius: "10px", fontStyle: "italic", cursor: "pointer", color: "white" }} onClick={() => handleLogout()}>For log out click here...</h4>
                    <br></br>
                    <br></br>
                    {/* if user is logged in all city cards will show otherwise not */}
                    <NavLink to="/nagpur" style={{ padding: "30px", backgroundColor: "Black", borderRadius: "10px", fontStyle: "italic" }}>
                        Nagpur
                    </NavLink>
                    <br></br>
                    <br /><br /><br />
                    <NavLink to="/pune" style={{ padding: "30px", backgroundColor: "Black", borderRadius: "10px", fontStyle: "italic" }}>
                        Pune
                    </NavLink>
                    <br></br>
                    <br /><br /><br />
                    <NavLink to="/mumbai" style={{ padding: "30px", backgroundColor: "Black", borderRadius: "10px", fontStyle: "italic" }}>
                        Mumbai
                    </NavLink>
                    <br></br>
                    <br /><br /><br />
                    <NavLink to="/hyderabad" style={{ padding: "30px", backgroundColor: "Black", borderRadius: "10px", fontStyle: "italic" }}>
                        Hyderabad
                    </NavLink>
                    <br></br>
                    <br /><br /><br />
                    <NavLink to="/jammu" style={{ padding: "30px", backgroundColor: "Black", borderRadius: "10px", fontStyle: "italic" }}>
                        Jammu
                    </NavLink>
                    <br></br>
                    <br /><br /><br />
                    <NavLink to="/kashmir" style={{ padding: "30px", backgroundColor: "Black", borderRadius: "10px", fontStyle: "italic" }}>
                        Kashmir
                    </NavLink>
                    <br></br>
                    <br /><br /><br />
                    <NavLink to="/bengluru" style={{ padding: "30px", backgroundColor: "Black", borderRadius: "10px", fontStyle: "italic" }}>
                        Bengluru
                    </NavLink>
                    <br></br>
                    <br /><br /><br />
                    <NavLink to="/delhi" style={{ padding: "30px", backgroundColor: "Black", borderRadius: "10px", fontStyle: "italic" }}>
                        Delhi
                    </NavLink>
                    {/* if user not logged in then this warning will show */}
                </div> : <Link to='/'>"User not logged in"</Link>}

        </>
    )
}

export default Cards