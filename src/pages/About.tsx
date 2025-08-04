import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About This Project</h1>
      <p className={styles.paragraph}>
        After spending over a month searching for affordable and effective revision tools to prepare for the AWS Certified Solutions Architect Associate (SAA-C03) exam, I realized how limited the options were—especially for learners who can't afford expensive courses or platforms.
      </p>
      <p className={styles.paragraph}>
        This project was born out of that frustration and a desire to help others like me. It's a free, accessible web app designed to give students a solid and practical way to revise key AWS concepts.
      </p>
      <p className={styles.paragraph}>
        I hope this becomes a helpful starting point for anyone preparing for the exam. Whether you're new to cloud or reinforcing your knowledge, this app aims to make your journey smoother and more affordable.
      </p>
    </div>
  );
}

export default About;
