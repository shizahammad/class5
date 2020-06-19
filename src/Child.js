import React,{useContext} from 'react'
import counterContext from './CounterContext.js';

const Child = () => {
    let counterValue = useContext(counterContext);
    console.log(counterValue);
    return (
        <div>
            <h2>This is child comopnent</h2>
            <h2> Our Context api Counter value is : {counterValue[0]} </h2>
        <button onClick={() => {counterValue[1](++counterValue[0])}}>Increament Value</button>
        </div>
    )

}
export default Child;