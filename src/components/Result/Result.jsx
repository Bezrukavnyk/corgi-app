import { Typography } from "@material-ui/core";
import { answers } from "../../state/answers";

const Result = () => {

    const resultAnswer = answers.map((answer, index)=>{
        
      return <div className="answer-item" key={index}>
           <Typography variant="h4" component="p">
                {answer.name}
           </Typography>
           <Typography variant="h5" component="p">
                {answer.answer}
           </Typography>
       </div>
    })

    return ( 
     <div className="answers-wrap">
         {resultAnswer}
     </div>
    );
}
 
export default Result;