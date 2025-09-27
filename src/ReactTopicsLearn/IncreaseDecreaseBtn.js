import react, {useState} from "react";

const IncreaseDecreseBtn =()=> {
    let [nums, setNums] = useState(6)
    
    const addNumPen =()=> {
        setNums = nums + 1
    }

    return (
        <>
            <div> I have {nums} pen </div>
            <button onClick={addNumPen}> Add </button>
            
        </>
    )
}

export default IncreaseDecreseBtn;