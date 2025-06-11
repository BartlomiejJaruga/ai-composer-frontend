import styles from "./AudioPlayerPage.module.scss";

import mp3_example from "../../assets/mp3_example.mp3";
import CustomButtonWithOpacity from "@components/CustomButtonWithOpacity/CustomButtonWithOpacity";
import RepeatIcon from "@icons/repeat.svg?react";
import { useNavigate } from "react-router-dom";

export default function AudioPlayerPage() {
    const navigate = useNavigate();
    const fileName = "pop_spicy_bubblegum_vibefreak_3234.mp3";

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = mp3_example;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleComposeAgainClick = () => {
        navigate('/composeMelody');
    }
    
    return (
        <>
            <div className={styles.audio_player_page_container}>
                <h1>Your Melody is ready!</h1>

                <div className={styles.audio_container}>
                    <h2>{fileName}</h2>
                    <audio controls>
                        <source src={mp3_example} type="audio/mpeg" />
                        Twoja przeglądarka nie obsługuje elementu audio.
                    </audio>
                </div>

                <CustomButtonWithOpacity buttonText={"DOWNLOAD"} fontSize={"1.7rem"} onClickAction={handleDownload}/>
                
                <div className={styles.compose_again_container} onClick={handleComposeAgainClick}>
                    <span>Compose Again</span>
                    <RepeatIcon className={styles.compose_again_icon} />
                </div>
            </div>
        </>
    )
}