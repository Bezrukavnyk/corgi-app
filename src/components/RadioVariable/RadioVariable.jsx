import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

const RadioVariable = ({answers=[], changeAnswer}) => {
  // checking if an empty array came
if(answers.length == 0){
  return <p>some error</p>
}

    const options = answers.map((item)=>{
        return (
          <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
        )
      })
      
    return ( 
    <RadioGroup row onChange={(event)=> changeAnswer(event.target.defaultValue)}>
        {options}
    </RadioGroup>        
     );
}
 
export default RadioVariable;



