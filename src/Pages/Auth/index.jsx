import React, { useState } from 'react'
import Header from "../../Common/Header"
import Login from "./components/Login"
import Register from "./components/Register"
const AuthPage = () => {

    const [change, setChange] = useState(true)
    return (
        <>
            <div className='bg-main '>
                <Header />
                {

                    change ? (<Login change={change} onclick={setChange} />) : (<Register change={change} onclick={setChange} />)
                }
            </div>

        </>
    )
}

export default AuthPage
