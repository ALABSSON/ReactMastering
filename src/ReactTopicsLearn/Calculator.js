import react, { useState } from "react";


const Calculator = ()=> {
    let [numInpt, setNumInpt] = useState("0")

    const changeInpt = val => {
        if (numInpt == 0 ) {
            setNumInpt(val)
        } else {
            setNumInpt(numInpt + val)

        }
    }

    const clearInpt = () => {
        setNumInpt("0")
    }

    const calculateInpt = ()=> {
        setNumInpt(eval(numInpt))
    }

    const delLast =()=> {
        setNumInpt(numInpt.slice(0, -1))
    }


    return( 
        <>
            <h1> Calculator  </h1>
            <div> {numInpt} </div>
            <div> 
                <button onClick={()=>changeInpt("1")}> 1 </button>
                <button onClick={()=>changeInpt("2")}> 2 </button>
                <button onClick={()=>changeInpt("3")}> 3 </button>
                <button onClick={()=>changeInpt("4")}> 4 </button>
            </div>
            <div> 
                <button onClick={()=>changeInpt("5")}> 5 </button>
                <button onClick={()=>changeInpt("6")}> 6 </button>
                <button onClick={()=>changeInpt("7")}> 7 </button>
                <button onClick={()=>changeInpt("8")}> 8 </button>
            </div>
            <div> 
                <button onClick={()=>changeInpt("9")}> 9 </button>
                <button onClick={()=>changeInpt("0")}> 0 </button>
                <button onClick={clearInpt}> DEL </button>
                <button onClick={calculateInpt}> = </button>
            </div>
            <div> 
                <button onClick={()=>changeInpt("+")}> + </button>
                <button onClick={()=>changeInpt("-")}> - </button>
                <button onClick={()=>changeInpt("*")}> * </button>
                <button onClick={()=>changeInpt("/")}> / </button>
            </div>
            
            <button onClick={delLast}> CLEAR </button>
    

        
        
        </> 
    )
}



export default Calculator;