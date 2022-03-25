import { useState } from 'react';
import TextField from '@mui/material/TextField';
const InputVariable = ({changeAnswer}) => {

    const [value, setValue] = useState("");

    const changeValue = (event) =>{
        setValue(event.target.value)
        changeAnswer(value)
    }
    return ( 
        <TextField 
        id="outlined-basic" 
        label="Outlined"
        type="text"
        role={"text"}
        variant="outlined"
        placeholder="some value"
        value={value}
        className="input"
        onChange={event => changeValue(event)}
        />
     );
}
 
export default InputVariable;