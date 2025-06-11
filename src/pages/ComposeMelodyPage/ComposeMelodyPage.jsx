import styles from "./ComposeMelodyPage.module.scss";

import { useEffect, useState } from "react";
import axiosInstance from "@services/axiosInstance";
import CustomButtonWithOpacity from "@components/CustomButtonWithOpacity/CustomButtonWithOpacity";
import { useNavigate } from "react-router-dom";
import CustomSelectWithOpacity from "@components/CustomSelectWithOpacity/CustomSelectWithOpacity";
import CustomSlider from "@components/CustomSlider/CustomSlider";

export default function ComposeMelodyPage() {
    const navigate = useNavigate();

    const handleComposeButtonClick = () => {
        navigate("/melodyBeingComposed");
    }

    const handleFormChange = (e) => {
        console.log(e.target);
    }

    const instrumentsData = ["Trumpet", "Piano", "Guitar"];
    const musicGenreData = ["Pop", "Country", "Rock", "Experimental"];
    const fileTypeData = ["MP3", "MIDI", "WAV"];

    return (
        <>
            <div className={styles.compose_melody_page_container}>
                <h1>Compose Your Melody</h1>
                <div className={styles.melody_setting_container}>
                    <CustomSelectWithOpacity 
                        labelText={"Music Genre:"} 
                        defaultOptionText={"Select Genre"}
                        selectorName={"genre"}
                        onChangeHandler={handleFormChange}
                        data={musicGenreData}
                        fontSize={"2rem"}
                    />
                    <CustomSlider />
                    <CustomSelectWithOpacity 
                        labelText={"Main Instrument:"} 
                        defaultOptionText={"Select Instrument"}
                        selectorName={"instrument"}
                        onChangeHandler={handleFormChange}
                        data={instrumentsData}
                        fontSize={"2rem"}
                    />
                    <CustomSlider />
                    <CustomSelectWithOpacity 
                        labelText={"File Type:"} 
                        defaultOptionText={"Select File Type"}
                        selectorName={"fileType"}
                        onChangeHandler={handleFormChange}
                        data={fileTypeData}
                        fontSize={"2rem"}
                    />
                    
                </div>
                <CustomButtonWithOpacity buttonText={"COMPOSE"} fontSize={"2.5rem"} onClickAction={handleComposeButtonClick}/>
            </div>
        </>
    )
}