import styles from "./MelodyBeingComposedPage.module.scss";

import AnimatedStaff from "@components/AnimatedStaff/AnimatedStaff";
import CustomRedButtonWithOpacity from "@components/CustomRedButtonWithOpacity/CustomRedButtonWithOpacity";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MelodyBeingComposedPage() {
    const navigate = useNavigate();

    const handleStopComposingButtonClick = () => {
        navigate('/composeMelody');
    }
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/audioPlayer');
        }, 10000);

        return () => {
            clearTimeout(timeoutId);
        }
    }, []);


    return (
        <>
            <div className={styles.melody_being_composed_page_container}>
                <AnimatedStaff />
                <div className={styles.user_information_container}>
                    <h1>Your melody is being composed...</h1>
                    <p>This can take a few minutes</p>
                </div>
                <CustomRedButtonWithOpacity buttonText={"STOP COMPOSING"} fontSize={"2rem"} onClickAction={handleStopComposingButtonClick}/>
            </div>
        </>
    )
}