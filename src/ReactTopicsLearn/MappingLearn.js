import React, { useState } from "react";

const MappingLearn = ()=> {

    const [inpNum, setInpNum] = useState("")
    const [inpNums, setInpNums] = useState([])

    const getInpt = e => {
        setInpNum(e)
    }
    
    const clickShow = ()=> {
        setInpNums([...inpNums, inpNum])
    }

    const delRow = i => {
        let toDel = inpNums.filter((inpNum, myInd)=> myInd !== i) 
        setInpNums(toDel)
    }

    return (
        <>
            <br /> <h1> Maping an Array Learn </h1>
            <input type="number" onChange={inpType=>{getInpt(inpType.target.value)}} />
            <button onClick={clickShow}> Show Click </button>
        
            <br />
            {inpNums.map( (val, i) =>
                    <h6 key={i}> i have {val} pen <button onClick={()=> {delRow(i)}}>Delete </button> </h6>
            )}

        
        
        </>
    )
}

export default MappingLearn;