import { Navbar, Form, Button, FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { useState } from "react"

export default function Nav(props) {

    const [location, setLocation] = useState("")

    async function parseLocation(location) {
        // String split by city and state
        const potentialStateCity = location.split(", ")
        const covidStatsApi = 'https://fabled-decker-310400.wl.r.appspot.com/'

        // // state // state/city
        const potentialLocation = potentialStateCity.length > 1 ? `${potentialStateCity[1]}/${potentialStateCity[0]}` : `${potentialStateCity[0]}`
        console.log(potentialLocation)
        const requestDataForLocation = await fetch(covidStatsApi + potentialLocation).catch(function () {
            console.log("One of the locations seems to be invalid")
        })

        const locationData = await requestDataForLocation.json()
        props.updateStats(locationData)
        console.log(locationData)

        return locationData
    }

    return (
        <Navbar expand="lg">
            <Navbar.Brand>Healthy State</Navbar.Brand>
            <FaSearch />
            <Form onSubmit={function (e) { parseLocation(location); e.preventDefault(); }} inline style={navStyle}>
                <FormControl onSubmit={() => parseLocation(location)} onChange={(e) => setLocation(e.target.value)} id="location" type="text" placeholder="Enter a city, state" className="mr-sm-2" />
                <Button onClick={() => parseLocation(location)} variant="outline-success">Search</Button>
            </Form>
        </Navbar>
    )
}

const navStyle = {
    padding: '0 10px'
}



