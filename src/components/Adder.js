import { useState } from 'react';
import Row from './Row';
import bootstrap from 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/+esm'

// Adder component
export default function Adder() {
    // Internal state made of array of rows
    const [rows, setRows] = useState([]);
    // Each row is an object containing the sign, integer value and enabled flag
    // {sign: +/-, value: integer, enabled: true/false}

    // arrow funtion to set a specific row's enabled state
    // parameters: boolean state, row's index
    const setEnabledRow = (state, index) => {
        //create state array copy
        let newRows = [...rows];
        //check if there is a row at specified index and if it already has the desired state
        if (newRows[index] && newRows[index].enabled != state) {
            //create new object and copy old values where needed
            let oldRow = newRows[index];
            let newRow = {sign: oldRow.sign, value: oldRow.value, enabled: state}
            //insert new object in new array
            newRows[index] = newRow;
            //update state with new array values
            setRows([...newRows]);
        }
    };

    // arrow funtion to delete a specific row
    // parameters: row's index
    const deleteRow = (index) => {
        //create new state array
        let newRows;
        //check if there is a row at specified index
        if (rows[index]) {
            //copy rows minus deleted one inside new array
            newRows = rows.slice(0, index).concat(rows.slice(index+1))
            //update state with new array values
            setRows([...newRows]);
        }
    };

    // arrow funtion to set a specific row's integer value
    // parameters: integer value, row's index, boolean value to allow "" inside the input field
    const changeRowValue = (value, index, allowEmpty) => {
        //create state array copy
        let newRows = [...rows];
        //parse value in new integer
        let number = parseInt(value);
        //check if there is a row at specified index
        if (newRows[index]) {
            //create new object and copy old values where needed
            let oldRow = newRows[index];
            let newRow = {sign: oldRow.sign, value: isNaN(number) ? (allowEmpty ? "" : 0)  : number, enabled: oldRow.enabled}
            //insert new object in new array
            newRows[index] = newRow;
            //update state with new array values
            setRows([...newRows]);
        }
    }

    // arrow funtion to set a specific row's enabled state
    // parameters: value's sign, row's index
    const changeRowSign = (sign, index) => {
        //create state array copy
        let newRows = [...rows];
        //check if there is a row at specified index
        if (newRows[index]) {
            //create new object and copy old values where needed
            let oldRow = newRows[index];
            let newRow = {sign: sign, value: oldRow.value, enabled: oldRow.enabled}
            //insert new object in new array
            newRows[index] = newRow;
            //update state with new array values
            setRows([...newRows]);
        }
    }


    return(
        <>
            <div>
                <button onClick={() => setRows(rows => [...rows, {sign: "+", value: 0, enabled: true}])}>Add row</button>
            </div>

            <ul>
               {rows.map((row, index) => 
                <li key={index}>
                    <select onChange={(event) => changeRowSign(event.target.value, index)}>
                        <option selected>+</option>
                        <option>-</option>
                    </select>
                        <input type="text" value={row.value} onBlur={(event) => changeRowValue(event.target.value, index, false)} onChange={(event) => changeRowValue(event.target.value, index, true)}/>
                        <button onClick={() => deleteRow(index)}> Delete </button>
                        {row.enabled ? 
                        <button onClick={() => setEnabledRow(false, index)}> Disable </button> : 
                        <button onClick={() => setEnabledRow(true, index)}> Enable </button>}
                    </li>
                )} 
            </ul>

            <div>
                Result: {rows.reduce((tot, curr) => 
                            tot + parseInt(curr.value && curr.enabled ?
                                 (curr.sign === "+" ? curr.value : "-" + curr.value) : 0)
                            , 0)}
            </div>
        </>
    );
}