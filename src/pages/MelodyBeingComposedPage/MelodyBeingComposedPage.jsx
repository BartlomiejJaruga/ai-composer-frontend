import styles from "./MelodyBeingComposedPage.module.scss";

import AnimatedStaff from "@components/AnimatedStaff/AnimatedStaff";
import CustomRedButtonWithOpacity from "@components/CustomRedButtonWithOpacity/CustomRedButtonWithOpacity";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { stopComposing } from "@slices/composerSlice";

export default function MelodyBeingComposedPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleStopComposingButtonClick = () => {
        dispatch(stopComposing());
        navigate('/composeMelody');
    }
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(stopComposing());
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