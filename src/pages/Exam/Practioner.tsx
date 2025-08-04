import { useState } from "react";
import styles from "./Exam.module.css"
import HomeStart from "../../combonents/HomeStart";
function Practitioner() {

    const [start, setStart] = useState(false)

  const startQuestionaireHandler = () => {
    if (setStart === null || typeof setStart !== 'function') {
      throw new Error('Start is not a function');
    }
    try {
      setStart(true);
    } catch (error) {
      console.error('Failed to start:', error);
      throw error;
    }
  };
    return (
        <div  className={styles.base}>
    <HomeStart startQuestionaire={startQuestionaireHandler} />
   
   
        </div>
    )
}

export default Practitioner;