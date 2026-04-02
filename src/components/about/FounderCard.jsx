import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import styles from './AboutSections.module.css'

export default function FounderCard() {
  const sectionRef = useRef(null)
  const isVisible = useScrollReveal(sectionRef, { threshold: 0.15, once: true })

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.founderGrid}>
          <div
            className={`${styles.founderImageWrap} ${styles.founderRevealTransition} ${styles.hiddenLeft40} ${isVisible ? styles.revealVisible : ''}`}
          >
            <img
              src="https://placehold.co/600x800"
              alt="Founder portrait"
              className={styles.founderImage}
            />
          </div>

          <div
            className={`${styles.founderTextCol} ${styles.founderRevealTransition} ${styles.hiddenRight40} ${styles.delay01} ${isVisible ? styles.revealVisible : ''}`}
          >
            <h2 className={styles.founderName}>Dr. A. Kapure</h2>
            <p className={styles.founderDesignation}>Founder and Clinical Lead</p>

            <div className={styles.founderBio}>
              <p>
                With a strong foundation in clinical dermatology and aesthetic medicine,
                Dr. Kapure has focused on designing treatment pathways that are precise,
                evidence-driven, and practical for everyday patient life.
              </p>
              <p>
                The core philosophy is straightforward: diagnose thoroughly, set realistic
                expectations, and move step-by-step with measurable milestones. This
                process helps ensure treatment plans remain safe, targeted, and effective.
              </p>
              <p>
                Beyond procedures, patient education is central to each consultation.
                Clear explanations around skin behavior, scalp health, maintenance, and
                prevention empower patients to sustain outcomes long after treatment.
              </p>
              <p>
                Under this leadership, the clinic continues to prioritize consistency,
                empathy, and high standards of care for every patient journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
