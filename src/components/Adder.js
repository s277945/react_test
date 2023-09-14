import { useState } from 'react';
import Row from './Row';
import bootstrap from 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/+esm'

export default function Adder() {
    const [sum, setSum] = useState(0);
    const [rows, setRows] = useState([]);
    const enableRow = (index) => {
        let newRows = rows;
        if (!newRows[index].enabled) {
            let oldRow = newRows[index];
            let newRow = {sign: oldRow.sign, value: oldRow.value, enabled: true}
            newRows[index] = newRow;
            setRows([...newRows]);
        }
    };
    const disableRow = (index) => {
        let newRows = rows;
        if (newRows[index].enabled) {
            let oldRow = newRows[index];
            let newRow = {sign: oldRow.sign, value: oldRow.value, enabled: false}
            newRows[index] = newRow;
            setRows([...newRows]);
        }
    };
    return(
        <>
            <div>
                <button onClick={() => setRows(rows => [...rows, {sign: "+", value: 0, enabled: false}])}>Add row</button>
            </div>
            <ul>
               {rows.map((row, index) => 
                <li key={index}>
                    <select>
                        <option selected>+</option>
                        <option>-</option>
                    </select>
                        <input type="text" value={row.value}/>
                        <button>Delete</button>
                        {row.enabled ? 
                        <button onClick={() => disableRow(index)}> Disable </button> : 
                        <button onClick={() => enableRow(index)}> Enable </button>}
                    </li>
                )} 
            </ul>
        </>
    );
}