import React,{useState} from'react';

const UseState = () =>{
    const [state,setState] = useState(0)

    

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=> setState(state +1)}>like</button>
        </div>
    )
}

export default UseState;