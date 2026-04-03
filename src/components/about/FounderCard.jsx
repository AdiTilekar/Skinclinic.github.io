import { useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import styles from './AboutSections.module.css'
import doctorAboutFounderImg from '../../assets/doctor/doctor-about-founder.webp'

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
              src={doctorAboutFounderImg}
              alt="Dr. Smita Kapure - Founder and Clinical Lead"
              className={styles.founderImage}
            />
          </div>

          <div
            className={`${styles.founderTextCol} ${styles.founderRevealTransition} ${styles.hiddenRight40} ${styles.delay01} ${isVisible ? styles.revealVisible : ''}`}
          >
            <h2 className={styles.founderName}>Dr. Smita Kapure</h2>
            <p className={styles.founderDesignation}>Founder and Clinical Lead</p>

            <div className={styles.founderBio}>
              <p>
                Dr. Smita Kapure is an aesthetic physician and hair expert known for her
                patient-centric care and natural-looking outcomes. With over 6 years of
                experience in non-surgical aesthetic medicine and advanced hair
                treatments, she has helped thousands of patients improve hair and skin
                health with confidence.
              </p>
              <p>
                Her professional qualifications include BAMS, MS (General Surgery),
                Fellowship in Cosmetology, Fellowship in Trichology, Fellowship in Hair
                Transplant, and Fellowship in Aesthetic Laser.
              </p>
              <p>
                Dr. Kapure is recognized for precision in hair restoration, advanced PRP
                (Platelet-Rich Plasma) therapies, and ethical, customized treatment
                planning. Having served patients across Chinchwad (Pune), Akola, Nagpur,
                Narayangaon, and Alephata, she continues to provide science-backed
                guidance for hair loss, laser procedures, and everyday skin and hair care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
