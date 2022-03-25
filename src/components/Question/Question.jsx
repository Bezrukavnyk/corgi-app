import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import SelectCustom from '../SelectCustom/SelectCustom';
import RadioVariable from '../RadioVariable/RadioVariable';
import InputVariable from "../InputVariable/InputVariable";
import { answers } from "../../state/answers";

import { Button, Typography } from "@material-ui/core";

const Question = ({data, lastId}) => {

    const [answer, setAnswer] = useState("");

    const navigate = useNavigate();
    // redirect function for results
    const redirectToResult = () =>{
      return navigate("/result");
    }

    // change answer
    const handleChange = (event) => {
      setAnswer(event);
    };

    // is disabled btn next question
    const isDisabled = () =>{
      return (answer == "") ? true : false;
    }

    // push answer in array
    const pushAnswer = () =>{
      const answerToQuestion = {
        name : data.name,
        answer : answer
      }
      answers.push(answerToQuestion);
    }
    
    // what kind of input should be rendered
    const isTypeInput = (type, props, changeAnswer) =>{
        if(type == "selector"){
          return  <SelectCustom answers={props} changeAnswer={changeAnswer}/> 
        }else if(type == "radioBtn"){
          return <RadioVariable answers={props} changeAnswer={changeAnswer}/>  
        }else if(type == "input"){
          return <InputVariable changeAnswer={changeAnswer}/>   
        }
      
    }
    // 2 functions on 1 btn
    const handleClick = () => {
      pushAnswer()
      redirectToResult()
    }


    // what kind of btn should be rendered
    const btn = (data.id === lastId) ? 
      <Button 
        variant="outlined"
        disabled={isDisabled()}
        onClick={()=> handleClick()}
        >
          Result
      </Button>:
      <Button 
       variant="outlined"
        disabled={isDisabled()}
        onClick={pushAnswer}
        className="next"
        >
        Next Quesition
    </Button>
   
    
    return ( 
      <div className="Question">
          <Typography variant="h3" component="h2">
                {data.name}
          </Typography>
           {isTypeInput(data.typeAnswer, data.answers, handleChange)}
           {btn}
        </div>

     );
}
 
export default Question;