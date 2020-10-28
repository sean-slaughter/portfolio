import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
        <div>
            <Navbar style={{backgroundColor: "#2e1c2b"}}>
                <Navbar.Brand href="/home">
                    <img src="/brand.png" width="300" className="d-inline-block align-top" alt=""/>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
