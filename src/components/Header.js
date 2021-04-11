import MultiColorProgressBar from './MultiColorProgressBar'

const Header = (props) => {
    let readings = [
        {
            name: 'Low',
            color: '#38ba6e'
        },
        {
            name: 'Medium',
            color: '#ebe22f'
        },
        {
            name: 'High',
            color: '#eba32f'
        },
        {
            name: 'Very high',
            color: '#c91212'
        },
        {
            name: 'Severe',
            color: '#820a0a'
        }
    ]

    return (
        <header style={{'margin-top': '50px'}}>
            <h1>{props.title}</h1>
            <MultiColorProgressBar readings={readings} vulnLevel={props.vulnLevel} />
            <small>COVID Risk Level</small>
        </header>
    )
}

export default Header