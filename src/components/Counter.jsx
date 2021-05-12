import {useState} from 'react';


export function Counter(){
    let [num, setnum] = useState(0);


    function increment(){
        setnum(num+1); 
    }

    return(
       
        <div>
            <h2>{num}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    );
};