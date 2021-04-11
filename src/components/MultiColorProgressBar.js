import React from 'react'
import '../bar.css'

class MultiColorProgressBar extends React.Component {
    render() {

        const parent = this.props;

        let bars = parent.readings && parent.readings.length && parent.readings.map(function (item, i) {
            return (
                <div className="bar" style={{ 'backgroundColor': item.color, 'width': 20 + '%' }} key={i}>
                </div>
            )
        }, this);

        let legends = parent.readings && parent.readings.length && parent.readings.map(function (item, i) {
            return (
                <div className="legend" key={i}>
                    <span className="dot" style={{ 'color': item.color }}>●</span>
                    <span className="label">{item.name}</span>
                </div>
            )
        }, this);

        return (
            <div className="multicolor-bar">
                <div className="bars">
                    {bars === '' ? '' : bars}
                </div>
                <div className="legends">
                    {legends === '' ? '' : legends}
                </div>
            </div>
        );
    }
}

export default MultiColorProgressBar