import { useState } from 'react';
import Row from './components/Row';

export default function Adder() {
    const [sum, setSum] = useState(0);
    const [rows, setRows] = useState([]);
    return(
        <>
            <div>
                <button>Add row</button>
            </div>
            <ul>
               {rows.map((row) => <Row/>)} 
            </ul>
        </>
    );
}