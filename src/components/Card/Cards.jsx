import { NavLink } from "react-router-dom"



function Cards() {
    

    return (
        <div className="Cards">

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
        </div>
    )
}

export default Cards