import styles from './Header.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} AWS practice solutionApp. Built with 💻 to help learners succeed.</p>
      <p className={styles.links}>
        <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" target="_blank" rel="noopener noreferrer">
          Learn about the SAA-C03 Exam
        </a>
      </p>
    </footer>
  );
}

export default Footer;
