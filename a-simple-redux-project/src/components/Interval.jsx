import './Interval.css'

import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterNumberMin, alterNumberMax } from '../store/actions/numeros'

const Interval = props => {

    const { min, max } = props

    return (
        <Card title="Invervalo de Números" red>
            <div className="Interval">
                <span>
                    <strong>Mínimo : </strong>
                    <input type="number" value={min} onChange={e => props.alterMinNumber(+e.target.value) } max={max}/>
                </span>
                <span>
                    <strong>Máximo : </strong>
                    <input type="number" value={max} onChange={e => props.alterMaxNumber(+e.target.value)} min={min}/>
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

const mapDispathToProps = (dispatch) => {
    return {
        //function that can be accessed by props
        alterMinNumber(newNumber) {
            const action = alterNumberMin(newNumber)
            dispatch(action)
        },
        alterMaxNumber(newNumber) {
            const action = alterNumberMax(newNumber)
            dispatch(action)
        }
    }
}

export default connect(
        mapStateToProps,
        mapDispathToProps
    )(
        Interval
    )