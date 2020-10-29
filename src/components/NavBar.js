import React from 'react'
import { Navbar, Image} from 'react-bootstrap'

export default function NavBar() {
    return (
        <div>
            <Navbar className="justify-content-center" style={{backgroundColor: "#2e1c2b"}}>
                <Navbar.Brand href="#">
                    <Image width={500} src="/brand.png" fluid/>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
