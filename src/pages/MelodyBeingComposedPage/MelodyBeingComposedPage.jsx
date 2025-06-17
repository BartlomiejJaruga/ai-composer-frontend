import styles from "./MelodyBeingComposedPage.module.scss";

import AnimatedStaff from "@components/AnimatedStaff/AnimatedStaff";
import CustomRedButtonWithOpacity from "@components/CustomRedButtonWithOpacity/CustomRedButtonWithOpacity";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stopComposing, setGeneratedMelodyData } from "@slices/composerSlice";
import axiosInstance from "@services/axiosInstance";

export default function MelodyBeingComposedPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.composer.lastComposeSettings);

    const handleStopComposingButtonClick = () => {
        dispatch(stopComposing());
        navigate('/composeMelody');
    }
    
    const hasStartedGenerating = useRef(false);

    const handleGenerateMelodyPost = async () => {
        if(hasStartedGenerating.current) return;

        hasStartedGenerating.current = true;

        try {
            const response = await axiosInstance.post(
                '/generate_music',
                createPostBody(formData),
                { responseType: 'blob', timeout: 300_000 },
            );

            const blob = new Blob([response.data], { type:  (formData.fileType !== "MIDI" ? 'audio/mpeg' : 'application/octet-stream') });
            const url = URL.createObjectURL(blob);
            console.log(response);
            console.log(blob);
            const MelodyName = response.headers['generated_file_name'] || `default_melody_name.${formData.fileType}`;

            dispatch(setGeneratedMelodyData({ 
                generatedMelodyURL: url, 
                generatedMelodyName: MelodyName,
            }));
            dispatch(stopComposing());
            navigate('/audioPlayer');
        } 
        catch (error) {
            console.error('Error while generating music:', error);
            dispatch(stopComposing());
            navigate('/somethingWentWrong');
        }
    }

    useEffect(() => {
        handleGenerateMelodyPost();
    }, []);


    const createPostBody = (formData) => {
        return {
            music_genre: formData.genre,
            main_instrument: formData.instrument,
            sequence_length_percentage: Number(formData.sequenceQuantity),
            diversity_percentage: Number(formData.melodyDiversity),
            file_type: formData.fileType,
        }
    }

    return (
        <>
            <div className={styles.melody_being_composed_page_container}>
                <AnimatedStaff />
                <div className={styles.user_information_container}>
                    <h1>Your melody is being composed...</h1>
                    <p>This can take up to a few minutes</p>
                </div>
                <CustomRedButtonWithOpacity buttonText={"STOP COMPOSING"} fontSize={"2rem"} onClickAction={handleStopComposingButtonClick}/>
            </div>
        </>
    )
}