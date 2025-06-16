import styles from "./AudioPlayerPage.module.scss";

import CustomButtonWithOpacity from "@components/CustomButtonWithOpacity/CustomButtonWithOpacity";
import RepeatIcon from "@icons/repeat.svg?react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AudioPlayerPage() {
    const navigate = useNavigate();
    const melodyURL = useSelector((state) => state.composer.generatedMelodyURL);
    const fileName = useSelector((state) => state.composer.generatedMelodyName);
    const fileType = useSelector((state) => state.composer.lastComposeSettings.fileType);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = melodyURL;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleComposeAgainClick = () => {
        if(melodyURL){
            URL.revokeObjectURL(melodyURL);
        }
        navigate('/composeMelody');
    }



    return (
        <>
            <div className={styles.audio_player_page_container}>
                <h1>Your Melody is ready!</h1>

                <div className={styles.audio_container}>
                    <h2>{fileName}</h2>
                    <audio controls>
                        <source 
                            src={melodyURL} 
                            type="audio/mpeg"
                        />
                        If you can see this, then your browser doesn't support audio files.
                    </audio>
                    {fileType === "MIDI" && (
                        <p>
                            Website can't play .mid files!<br/>
                            Download file to be able to listen to it.
                        </p>
                    )}
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