import { useState } from 'react';
import Row from './Row';
import bootstrap from 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/+esm'

export default function Adder() {
    const [sum, setSum] = useState(0);
    const [rows, setRows] = useState([]);
    return(
        <>
            <div>
                <button type="button" class="btn btn-primary" onClick={() => setRows(rows => [...rows, {}])}>Add row</button>
            </div>
            <ul>
               {rows.map((row) => <Row/>)} 
            </ul>
        </>
    );
}