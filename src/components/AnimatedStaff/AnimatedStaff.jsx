import styles from "./AnimatedStaff.module.scss";

export default function AnimatedStaff() {
    const notes = [
        { type: "single", y: 25 },
        { type: "double", y: 50 },
        { type: "single", y: 35 },
        { type: "double", y: 40 },
        { type: "single", y: 65 },
        { type: "single", y: 75 },
        { type: "single", y: 95 },
        { type: "double", y: 50 },
        { type: "double", y: 80 },
        { type: "single", y: 35 },
        { type: "single", y: 45 },
        { type: "double", y: 40 },
        { type: "single", y: 65 },
        { type: "double", y: 30 },
    ]

    return (
        <div className={styles.staff_container}>
			<svg viewBox="0 0 1000 150" className={styles.staff}>
				{[60, 80, 100, 120, 140].map((y) => (
				<line
					key={y}
					x1="50"
					x2="950"
					y1={y}
					y2={y}
					stroke="black"
					strokeWidth="3"
					strokeLinecap="round"
				/>
				))}
				
				{notes.map((note, index) => (
					<g transform={`translate(0, ${note.y})`} key={index}>
						{ note.type === "double" && (
							<g className={styles.double_note} style={{ "--note-appear-order": index + 1 }} >
								<path
									d="M23.58 14.84c-2.97 0-5.39 2.41-5.39 5.38 0 2.97 2.42 5.38 5.39 5.38 2.86 0 5.19-2.25 5.35-5.08.02-.09.03-18.52.03-18.52 0-.48-.22-.93-.61-1.21-.38-.28-.88-.36-1.33-.22L11.86 5.28c-.63.2-1.05.78-1.05 1.44v14.59a5.37 5.37 0 0 0-2.39-.58c-2.97 0-5.38 2.42-5.38 5.39 0 2.96 2.41 5.38 5.38 5.38 2.87 0 5.19-2.26 5.35-5.08.02-.1.04-12.73.04-12.73l12.15-3.78v5.51c-.72-.36-1.52-.58-2.38-.58z"
									fill="black"
								/>
							</g>
						)}

						{ note.type === "single" && (
							<g className={styles.single_note} style={{ "--note-appear-order": index + 1 }} >
								<path fill="none" d="M0 0h24v24H0V0z" />
								<path d="M12 5v8.55c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07-.46 2.74 1.86 5.08 4.59 4.65 1.96-.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2z"></path>
							</g>
						)}
					</g>
				))}
			</svg>
        </div>
    );
}
