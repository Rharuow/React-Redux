import './Interval.css'

import React from 'react'
import Card from './Card'


export default props => {
    const {min, max} = props
    return (
        <Card title="Invervalo de Números" red>
            <div className="Interval">
                <span>
                    <strong>Mínimo : </strong>
                    <input type="number" value={min} max={max}
                    onChange={e => props.onMinChange(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo : </strong>
                    <input type="number" value={max} min={min}
                    onChange={e => props.onMaxChange(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}