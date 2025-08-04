import HomeStart from '../../combonents/HomeStart';
import styles from "./Exam.module.css"
import { useState } from 'react';
function SolutionsArchitect() {
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
        <div className={styles.base}>
               <HomeStart startQuestionaire={startQuestionaireHandler} /> 
   
        </div>
    );
}

export default SolutionsArchitect;