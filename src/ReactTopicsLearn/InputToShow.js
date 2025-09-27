import React, { useState }  from "react";

const InputToShow = ()=> {
    const [inpName, setInpName] = useState("")
    const [addNames, setAddNames] = useState([])
  
    const nameShow = llllll => {
        setInpName(llllll)
    }

    const ShoweName =()=> {
        setAddNames([...addNames, inpName]) 
    }

    return(
        <>
            <br /> <br /> <br /> <h1> Click to Show Array Content </h1>
            
            <div>  {addNames} </div>
            <input onChange={e=>nameShow(e.target.value)} /> 
            <button onClick={ShoweName}> Show Input Above  </button>
        </>
    )
}


export default InputToShow;