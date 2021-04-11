import { Card } from 'react-bootstrap'

const Stat = ({ stat }) => {
    return (
        // <div className='col'>
        //     <b><p><span className="dot" style={{ 'color': 'black' }}>●</span> {stat.text}</p></b>
        //     <p>{stat.number}</p>
        // </div>
        <Card border='secondary'>
            <Card.Header>{stat.text}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {stat.number}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Stat