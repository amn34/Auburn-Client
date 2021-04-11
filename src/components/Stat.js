import { Card } from 'react-bootstrap'

const Stat = ({ stat }) => {
    return (
        <div class='row'>
            <div class='col'>
                <h4>{stat.text}</h4>
            </div>
            <div class='col'>
                <p>{stat.number}</p>
            </div>
        </div>
    )
}

export default Stat