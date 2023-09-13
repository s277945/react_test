export default function Row() {
    return(
        <li>
            <select>
                <option selected>+</option>
                <option>-</option>
            </select>
                <input type="text" value="100"/>
                <button>Delete</button>
                <button>Disable</button>
        </li>
    );
}