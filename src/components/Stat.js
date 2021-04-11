const Stat = ({ stat }) => {
    return (
        <div className='col'>
            <h4>{stat.text}</h4>
            <p>{stat.number}</p>
        </div>
    )
}

export default Stat