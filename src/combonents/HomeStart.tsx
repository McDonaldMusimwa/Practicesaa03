import styles from "./Homestart.module.css";
type Props = {
    startQuestionaire:()=>void
}

function HomeStart({ startQuestionaire }: Props) {
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
            <p>Practice Saa is a web application that allows Solutions Architect students to practice their knowledge in preparation for exam.</p>
            <button onClick={startButtonHandler}>Start</button>
        </div> </>
    );
}

export default HomeStart