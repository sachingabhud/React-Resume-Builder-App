import React from "react";
import styles from "./Home.module.css";
import Resume from "../assets/Resume.png";
import { Link, useNavigate } from "react-router-dom";
import H from "../assets/h.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.navWrapper}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Link to={"/"}>
                <img src={Resume} alt="Logo" />
              </Link>
            </div>
            <div className={styles.btn}>
              <button
                onClick={() => {
                  navigate("/details");
                }}
              >
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className={styles.heroWrap}>
          <div className={styles.heroText}>
            <h1>The Free Online Resume Builder</h1>
            <p>
              A Quick and Easy Way to Create Your Resume In just four steps.
              <br /> Save the created Resume in PDF format and send it straight to the hiring manager.
            </p>

            <button className={styles.heroButton} onClick={() => {
              navigate("/details");
            }}>Create Now</button>
          </div>
          <div className={styles.heroImage}>
            <img src={H} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
