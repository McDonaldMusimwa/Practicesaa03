import styles from "./Homestart.module.css";
import { useState } from "react";
type Props = {
    startQuestionaire:()=>void,
    exam:string
}

function HomeStart({ startQuestionaire,exam }: Props) {
    const [startTimer, setStartTimer] = useState(false);

  const handleStart = () => {
    if(startQuestionaire === null || typeof startQuestionaire !== 'function') {
        throw new Error('Start is not a function');
    }
    setStartTimer(true);
  };


    const startQuestionaireHandler=()=> {
    handleStart(); 
    try {
        startQuestionaire();
    } catch (error) {
        console.error('Failed to start:', error);
        throw error;
    }
    };

    
    return (<>
        <div className={styles.homeStart}>
            <p>Practice Practice is a web application that allows you to test your knowledge of AWS {exam} exam concepts.</p>
            <button onClick={startQuestionaireHandler}>Start</button>
        </div> </>
    );
}

export default HomeStart