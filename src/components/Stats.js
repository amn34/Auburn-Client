import Stat from './Stat'
import { CardDeck } from 'react-bootstrap'

const Stats = ({ stats }) => {
    return (
        <>
            {stats.map((stat) => (
                <Stat key={stat.id} stat={stat} />
            ))}
        </>
    )
}

export default Stats
