import React,{useReducer} from 'react'
import counterReducer from './CounterReducer'
const Child2 = () => {
    let [state, dispatch] = useReducer(counterReducer,0);
    return (
        <div>
            <h2> Using Counter reducer count is : {state}</h2>
            <button onClick={() => dispatch('INCREMENT')}>Increament Value</button>
        </div>
    )
}
export default Child2;