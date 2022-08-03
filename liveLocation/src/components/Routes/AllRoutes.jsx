import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../LogIn/Login'
import Cards from '../Card/Cards'
import Nagpur from '../CityCards/nagpur'
import Bengluru from '../CityCards/bengluru'
import Delhi from '../CityCards/delhi'
import Hyderabad from '../CityCards/hyderabad'
import Jammu from '../CityCards/jammu'
import Kashmir from '../CityCards/kashmir'
import Pune from '../CityCards/pune'
import Mumbai from '../CityCards/mumbai'


const AllRoutes = () => {
    return (
        <>
            <Routes>


                <Route exact path='/' element={<Login />} />
                <Route exact path='/Home' element={<Cards />} />
                <Route exact path='/nagpur' element={<Nagpur></Nagpur>}></Route>
                <Route exact path='/delhi' element={<Delhi></Delhi>}></Route>
                <Route exact path='/bengluru' element={<Bengluru></Bengluru>}></Route>
                <Route exact path='/hyderabad' element={<Hyderabad></Hyderabad>}></Route>
                <Route exact path='/jammu' element={<Jammu></Jammu>}></Route>
                <Route exact path='/kashmir' element={<Kashmir></Kashmir>}></Route>
                <Route exact path='/pune' element={<Pune></Pune>}></Route>
                <Route exact path='/mumbai' element={<Mumbai></Mumbai>}></Route>


            </Routes>

        </>
    )
}

export default AllRoutes