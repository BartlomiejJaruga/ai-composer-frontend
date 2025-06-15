import styles from "./ComposeMelodyPage.module.scss";

import { useEffect, useState } from "react";
import axiosInstance from "@services/axiosInstance";
import CustomButtonWithOpacity from "@components/CustomButtonWithOpacity/CustomButtonWithOpacity";
import { useNavigate } from "react-router-dom";
import CustomSelectWithOpacity from "@components/CustomSelectWithOpacity/CustomSelectWithOpacity";
import CustomSlider from "@components/CustomSlider/CustomSlider";

export default function ComposeMelodyPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        genre: "",
        instrument: "",
        fileType: "",
        sequenceQuantity: 50,
        melodyDiversity: 50,
    });

    const handleComposeButtonClick = () => {
        navigate("/melodyBeingComposed");
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value}));
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
                        fontSize={"1.5rem"}
                    />
                    <CustomSlider 
                        labelText={"Sequence Quantity"}
                        sliderName={"sequenceQuantity"}
                        minText={"Low"}
                        maxText={"High"}
                        minValue={0}
                        maxValue={100}
                        value={formData.sequenceQuantity}
                        stepValue={1}
                        fontSize={"1.5rem"}
                        onChangeAction={handleFormChange}
                    />
                    <CustomSelectWithOpacity 
                        labelText={"Main Instrument:"} 
                        defaultOptionText={"Select Instrument"}
                        selectorName={"instrument"}
                        onChangeHandler={handleFormChange}
                        data={instrumentsData}
                        fontSize={"1.5rem"}
                    />
                    <CustomSlider 
                        labelText={"Melody Diversity"}
                        sliderName={"melodyDiversity"}
                        minText={"Small"}
                        maxText={"Big"}
                        minValue={0}
                        maxValue={100}
                        value={formData.melodyDiversity}
                        stepValue={1}
                        fontSize={"1.5rem"}
                        onChangeAction={handleFormChange}
                    />
                    <CustomSelectWithOpacity 
                        labelText={"File Type:"} 
                        defaultOptionText={"Select File Type"}
                        selectorName={"fileType"}
                        onChangeHandler={handleFormChange}
                        data={fileTypeData}
                        fontSize={"1.5rem"}
                    />
                    
                </div>
                <CustomButtonWithOpacity buttonText={"COMPOSE"} fontSize={"2rem"} onClickAction={handleComposeButtonClick}/>
            </div>
        </>
    )
}