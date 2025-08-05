import { useState } from "react";
import styles from "./Question.module.css";
import Card from "./UI/Card";
type QuestionType = {
  question: string;
  answers: {
    selection: string;
    answer: string;
  }[];
  explantion: string;
  correctanswer: string;
};
type NavigateHandlerType = {
  nextQuestion: () => void;
  saveAnswer: () => void;

};

type Props = {
  question: QuestionType;
  navigateHandler: NavigateHandlerType;
    questionnumber:number
};

function QuestionComponent({ question, navigateHandler,questionnumber }: Props) {
  const [answer, setAnswer] = useState<string>('');
  const [userAsnwer, setUserAnswer] = useState<string>('');
  const [result,setResult]= useState<string>('')
  //setAnswer(question.correctanswer);
  if (!question) {
    throw new Error('Question cannot be null or undefined');
  }
  
function saveAnswerCompare(){
  const correctAnswer = question?.correctanswer
  if (!correctAnswer) {
    throw new Error('Question has no correct answer');
  }
  setAnswer(correctAnswer)
  const userAnswer = userAsnwer;
  if (!userAnswer) {
    throw new Error('User answer is null or undefined');
  }

  if(correctAnswer === userAnswer){
    setResult("Correct")
  } else {
   setResult("Incorrect answer")
  }
  navigateHandler.saveAnswer()
}
console.log(result)
  return (
    <div className={styles.questionComponent}>
      <form>
        <p className={styles.question}>Question:{questionnumber+1} {question.question}</p>
        {question.answers.map((ans) => (
          <div key={ans.selection} className={styles.answers}>
            <label>
              <input type="radio" name="answer" value={ans.selection} onChange={(e) => setUserAnswer(e.target.value)}/>
              {ans.selection}: {ans.answer}
            </label>
          </div>
        ))}
      </form>
      {answer ?
      <div className={styles.reviewsection}>
     
        <Card>{result}</Card>
        <Card>{question.explantion}</Card>
      </div> :null}
     {answer ? <button className={styles.buttin} onClick={navigateHandler.nextQuestion}>Next</button> : <button className={styles.button} onClick={saveAnswerCompare}>Save</button>}
    </div>
  );
}

export default QuestionComponent;
