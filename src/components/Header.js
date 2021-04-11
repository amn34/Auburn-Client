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
        <header>
            <h1>{props.title}</h1>
            <p>COVID Risk Level</p>
            <MultiColorProgressBar readings={readings} vulnLevel={props.vulnLevel} />
        </header>
    )
}

export default Header