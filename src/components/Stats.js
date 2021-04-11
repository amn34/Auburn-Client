import Stat from './Stat'

const Stats = ({ stats }) => {
    return (
        <>
            <div class='row'>
                {stats.map((stat) => (
                    <Stat key={stat.id} stat={stat} />
                ))}
            </div>
        </>
    )
}

export default Stats
