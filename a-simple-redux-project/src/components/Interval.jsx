import './Interval.css'

import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterNumberMin } from '../store/actions/numeros'

const Interval = props => {

    const { min, max } = props

    props.alterMinNumber(1000)

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

const mapActionCreatorsToProps = (dispatch) => {
    return {
        //function that can be accessed by props
        alterMinNumber(newNumber) {
            const action = alterNumberMin(newNumber)
            dispatch(action)
        }
    }
}

export default connect(
        mapStateToProps,
        mapActionCreatorsToProps
    )(
        Interval
    )