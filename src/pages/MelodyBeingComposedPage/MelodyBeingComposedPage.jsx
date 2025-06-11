import styles from "./MelodyBeingComposedPage.module.scss";

import AnimatedStaff from "@components/AnimatedStaff/AnimatedStaff";

export default function MelodyBeingComposedPage() {


    
    return (
        <>
            <div className={styles.melody_being_composed_page_container}>
                <h1>MelodyBeingComposedPage</h1>
                <AnimatedStaff />
            </div>
        </>
    )
}