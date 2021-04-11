import { Button } from 'react-bootstrap'

export const Vaccination = () => {
    return (
        <div className="mt-5">
            <h5>Get vaccinated today!</h5>
            <Button><a href="https://vaccinefinder.org/search" target="_blank" rel="noreferrer"
                style={{ color: "white" }}>VaccineFinder</a></Button>
        </div>
    )
}

export default Vaccination