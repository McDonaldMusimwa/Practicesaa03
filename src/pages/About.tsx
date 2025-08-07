
import styles from './About.module.css';
import { useNavigate } from 'react-router';
export default function About() {
  const navigation = useNavigate();
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>About CloudPrep</h1>
        <p>
          Welcome to CloudPrep, a free platform built to help learners prepare for AWS certification exams. Whether you're just starting or brushing up for your next badge, we provide curated questions, clear explanations, and community support—all without breaking the bank.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Achievements</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>🌍 Global Reach</h3>
            <p>Helping learners from around the world study for AWS certifications without cost barriers.</p>
          </div>
          <div className={styles.card}>
            <h3>⭐ 100% Free</h3>
            <p>All practice questions and explanations are free—no hidden fees or premium tiers.</p>
          </div>
          <div className={styles.card}>
            <h3>👍 Student-Approved</h3>
            <p>Built based on community feedback and the real challenges learners face.</p>
          </div>
          <div className={styles.card}>
            <h3>🤝 Open Source</h3>
            <p>Community-contributed and transparent—anyone can improve the platform.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Our Goals</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>🎯 Practice with Purpose</h3>
            <p>Deliver question sets focused on real exam domains to maximize learning efficiency.</p>
          </div>
          <div className={styles.card}>
            <h3>🧠 Build Confidence</h3>
            <p>Help learners gain clarity on tricky AWS topics using simple explanations and diagrams.</p>
          </div>
          <div className={styles.card}>
            <h3>🌐 Foster Community</h3>
            <p>Encourage peer-to-peer learning and sharing through forums and GitHub contributions.</p>
          </div>
          <div className={styles.card}>
            <h3>📈 Keep Content Fresh</h3>
            <p>Update questions as AWS services evolve—so you're never outdated on the exam.</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>
          <span className={styles.highlight}>Together</span>, let's simplify AWS certification for everyone.
        </h2>
        <p>Ready to start your free AWS prep journey?</p>
        <button className={styles.ctaButton} onClick={() => navigation('/')}>Explore Questions</button>
      </section>
    </div>
  );
}
