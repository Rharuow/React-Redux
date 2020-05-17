import './Interval.css'

import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'


const Interval = props => {

    const { min, max } = props

    return (
        <Card title="Invervalo de Números" red>
            <div className="Interval">
                <span>
                    <strong>Mínimo : </strong>
                    <input type="number" value={min} min={min}/>
                </span>
                <span>
                    <strong>Máximo : </strong>
                    <input type="number" value={max} max={max}/>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect(mapStateToProps)(Interval)