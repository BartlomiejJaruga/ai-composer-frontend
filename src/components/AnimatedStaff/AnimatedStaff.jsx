import styles from "./AnimatedStaff.module.scss";

export default function AnimatedStaff() {
  return (
    <div className={styles.staff_container}>
      {/* <svg viewBox="0 0 600 100" className="staff">
        {[10, 20, 30, 40, 50].map((y) => (
          <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="black" strokeWidth="1" />
        ))}

        {[15, 25, 35, 20, 30].map((y, i) => (
          <circle
            key={i}
            className={`note note-${i}`}
            cx={y + i + y + y}
            cy={y}
            r="5"
            fill="black"
          />
        ))}
      </svg> */}
      <svg viewBox="0 0 100 100" className={styles.staff}>
        {[1, 3, 5, 7, 9].map((y) => (
            <line x1="0" x2="100" y1={y} y2={y} stroke="black" strokeWidth="0.25" />
        ))}

        {[1, 3, 5, 7, 9].map((y, index) => (
            <circle className={`${styles.note} ${styles[`note_${index}`]}`} cx="0" cy={y} r="0.75" fill="black"/>
        ))}
      </svg>
    </div>
  );
}
