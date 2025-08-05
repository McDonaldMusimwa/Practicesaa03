import styles from "./Homestart.module.css";
type Props = {
    startQuestionaire:()=>void,
    exam:string
}

function HomeStart({ startQuestionaire,exam }: Props) {
    const startButtonHandler = () => {
        if (startQuestionaire === null || typeof startQuestionaire !== 'function') {
            throw new Error('Start is not a function');
        }
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
            <button onClick={startButtonHandler}>Start</button>
        </div> </>
    );
}

export default HomeStart