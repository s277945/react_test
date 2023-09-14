import { useState } from 'react';
import Row from './Row';
import bootstrap from 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/+esm'

export default function Adder() {
    const [sum, setSum] = useState(0);
    const [rows, setRows] = useState([]);
    const enableRow = (index) => {
        let newRows = rows;
        if (newRows[index] && !newRows[index].enabled) {
            let oldRow = newRows[index];
            let newRow = {sign: oldRow.sign, value: oldRow.value, enabled: true}
            newRows[index] = newRow;
            setRows([...newRows]);
        }
    };
    const disableRow = (index) => {
        let newRows = rows;
        if (newRows[index] && newRows[index].enabled) {
            let oldRow = newRows[index];
            let newRow = {sign: oldRow.sign, value: oldRow.value, enabled: false}
            newRows[index] = newRow;
            setRows([...newRows]);
        }
    };
    const changeRowValue = (value, index) => {
        let newRows = rows;
        if (newRows[index]) {
            let oldRow = newRows[index];
            let newRow = {sign: oldRow.sign, value: value, enabled: oldRow.enabled}
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
                <button onClick={() => setRows(rows => [...rows, {sign: "+", value: 0, enabled: false}])}>Add row</button>
            </div>
            <ul>
               {rows.map((row, index) => 
                <li key={index}>
                    <select onChange={(event) => changeRowSign(event.target.value, index)}>
                        <option selected>+</option>
                        <option>-</option>
                    </select>
                        <input type="text" value={row.value} onChange={(event) => changeRowValue(event.target.value, index)}/>
                        <button>Delete</button>
                        {row.enabled ? 
                        <button onClick={() => disableRow(index)}> Disable </button> : 
                        <button onClick={() => enableRow(index)}> Enable </button>}
                    </li>
                )} 
            </ul>
            <div>
                Result: {rows.reduce((tot, curr) => 
                            tot + parseInt(curr.value && curr.enabled ?
                                 (curr.sign == "+" ? curr.value : "-" + curr.value) : 0)
                            , 0)}
            </div>
        </>
    );
}