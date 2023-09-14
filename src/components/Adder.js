import { useState } from 'react';
import Row from './Row';
import bootstrap from 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/+esm'

export default function Adder() {
    const [rows, setRows] = useState([]);
    const setEnabledRow = (state, index) => {
        let newRows = rows;
        if (newRows[index] && newRows[index].enabled != state) {
            let oldRow = newRows[index];
            let newRow = {sign: oldRow.sign, value: oldRow.value, enabled: state}
            newRows[index] = newRow;
            setRows([...newRows]);
        }
    };
    const deleteRow = (index) => {
        let newRows;
        if (rows[index]) {
            newRows = rows.slice(0, index).concat(rows.slice(index+1))
            setRows([...newRows]);
        }
    };
    const changeRowValue = (value, index, allowEmpty) => {
        let newRows = rows;
        let number = parseInt(value);
        if (newRows[index]) {
            let oldRow = newRows[index];
            let newRow = {sign: oldRow.sign, value: isNaN(number) ? (allowEmpty ? "" : 0)  : number, enabled: oldRow.enabled}
            newRows[index] = newRow;
            setRows([...newRows]);
        }
    }
    const changeRowSign = (sign, index) => {
        let newRows = rows;
        if (newRows[index]) {
            let oldRow = newRows[index];
            let newRow = {sign: sign, value: oldRow.value, enabled: oldRow.enabled}
            newRows[index] = newRow;
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