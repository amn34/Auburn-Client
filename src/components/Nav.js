import { Navbar, Form, Button, FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

const Nav = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand>COVID Stats</Navbar.Brand>
            <FaSearch />
            <Form inline style={navStyle}>
                <FormControl type="text" placeholder="Type a city/state" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar>
    )
}

const navStyle = {
    padding: '0 10px'
}

export default Nav
