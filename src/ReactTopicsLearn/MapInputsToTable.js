import React from "react";

const MapInputsToTable = () => {

    return (
        <>
            <br /> <h1> Map Inputs to Table </h1>

            <input placeholder="Input Name" /> 
            <input placeholder="Input Dept" /> 
            <input placeholder="Input School" /> 
            <button> Show </button>

            <table border="1">
                <thead> 
                    <tr> 
                        <th> S/N </th>
                        <th> NAME </th>
                        <th> DEPARTMENT </th>
                        <th> SCHOOL </th>
                        <th> DELETE </th>
                    </tr>
                </thead>
                <tbody> 
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> sss </td>
                    <button> Delete </button>
                </tbody>
            </table>
            
        </>
    )

}



export default MapInputsToTable; 