import styles from "./HomePage.module.scss";

import CustomButtonWithOpacity from "@components/CustomButtonWithOpacity/CustomButtonWithOpacity";
import { useNavigate } from "react-router-dom";
import Speedometer from "@icons/speedometer.svg?react";
import Infinity from "@icons/infinity.svg?react";
import MusicNote from "@icons/music-note.svg?react";

export default function HomePage() {
    const navigate = useNavigate();

    const handleStartComposingButtonClick = () => {
        navigate('/composeMelody');
    }


    return (
        <div className={styles.home_page_container}>
            <div className={styles.welcome_text_container}>
                <p>AI Composer is an innovative tool powered by artificial intelligence that allows you to create unique musical compositions in a matter of minutes.</p>
            </div>
            <h1>Why AI Composer?</h1>
            <div className={styles.pros_of_ai_composer_container}>
                <div className={styles.single_pros_of_ai_composer_container}>
                    <div>
                        <Speedometer className={styles.speedometer_icon}/>
                        <h2>Speed and Efficiency</h2>
                    </div>
                    <div>
                        <p>Create music in the<br/> blink of an eye.</p>
                    </div>
                </div>
                <div className={styles.single_pros_of_ai_composer_container}>
                    <div>
                        <Infinity className={styles.infinity_icon}/>
                        <h2>No Limits</h2>
                    </div>
                    <div>
                        <p>Generate music for any occasion,<br/> without needing musical skills.</p>
                    </div>
                </div>
                <div className={styles.single_pros_of_ai_composer_container}>
                    <div>
                        <MusicNote className={styles.music_note_icon}/>
                        <h2>Innovative Sound</h2>
                    </div>
                    <div>
                        <p>Enjoy modern, unique compositions<br/> that inspire and surprise.</p>
                    </div>
                </div>
            </div>
            <CustomButtonWithOpacity buttonText={"START COMPOSING"} fontSize={"2.5rem"} onClickAction={handleStartComposingButtonClick} />
        </div>
    );
}