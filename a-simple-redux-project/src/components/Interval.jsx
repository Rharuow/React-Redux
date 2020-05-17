import './Interval.css'

import React from 'react'
import Card from './Card'


export default props => {
    return (
        <Card title="Invervalo de Números" red>
            <div className="Interval">
                <span>
                    <strong>Mínimo : </strong>
                    <input type="number" value={1}/>
                </span>
                <span>
                    <strong>Máximo : </strong>
                    <input type="number" value={10}/>
                </span>
            </div>
        </Card>
    )
}