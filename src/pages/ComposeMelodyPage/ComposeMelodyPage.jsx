import styles from "./ComposeMelodyPage.module.scss";

import { useEffect, useState } from "react";
import axiosInstance from "@services/axiosInstance";
import CustomButtonWithOpacity from "@components/CustomButtonWithOpacity/CustomButtonWithOpacity";
import { useNavigate } from "react-router-dom";
import CustomSelectWithOpacity from "@components/CustomSelectWithOpacity/CustomSelectWithOpacity";
import CustomSlider from "@components/CustomSlider/CustomSlider";
import { useDispatch, useSelector } from "react-redux";
import { startComposing } from "@slices/composerSlice";

export default function ComposeMelodyPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lastSettings = useSelector((state) => state.composer.lastComposeSettings);
    const [formData, setFormData] = useState({
        genre: lastSettings.genre,
        instrument: lastSettings.instrument,
        fileType: lastSettings.fileType,
        sequenceQuantity: lastSettings.sequenceQuantity,
        melodyDiversity: lastSettings.melodyDiversity,
    });
    const [formErrors, setFormErrors] = useState({
        genreError: null,
        instrumentError: null,
        fileTypeError: null,
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value}));
    }



    const isGenreCompleted = () => {
        if(formData.genre === ""){
            setFormErrors((prev) => ({ ...prev, genreError: "Music Genre needs to be set!" }));
            return false;
        }

        setFormErrors((prev) => ({ ...prev, genreError: null }));
        return true;
    }

    const isInstrumentCompleted = () => {
        if(formData.instrument === ""){
            setFormErrors((prev) => ({ ...prev, instrumentError: "Main Instrument needs to be set!" }));
            return false;
        }
        
        setFormErrors((prev) => ({ ...prev, instrumentError: null }));
        return true;
    }

    const isFileTypeCompleted = () => {
        if(formData.fileType === ""){
            setFormErrors((prev) => ({ ...prev, fileTypeError: "File Type needs to be set!" }));
            return false;
        }
        
        setFormErrors((prev) => ({ ...prev, fileTypeError: null }));
        return true;
    }

    const isFormCompleted = () => {
        let isFormFullyCompleted = true;

        if(!isGenreCompleted()) isFormFullyCompleted = false;
        if(!isInstrumentCompleted()) isFormFullyCompleted = false;
        if(!isFileTypeCompleted()) isFormFullyCompleted = false;

        return isFormFullyCompleted;
    }



    const handleComposeButtonClick = () => {
        if(!isFormCompleted()){
            return;
        }
        
        dispatch(startComposing(formData));
        navigate("/melodyBeingComposed");
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
                        defaultValue={formData.genre}
                        selectorName={"genre"}
                        onChangeHandler={handleFormChange}
                        onBlurHandler={isGenreCompleted}
                        data={musicGenreData}
                        fontSize={"1.5rem"}
                        isError={formErrors.genreError === null ? false : true}
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
                        defaultValue={formData.instrument}
                        selectorName={"instrument"}
                        onChangeHandler={handleFormChange}
                        onBlurHandler={isInstrumentCompleted}
                        data={instrumentsData}
                        fontSize={"1.5rem"}
                        isError={formErrors.instrumentError === null ? false : true}
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
                        defaultValue={formData.fileType}
                        selectorName={"fileType"}
                        onChangeHandler={handleFormChange}
                        onBlurHandler={isFileTypeCompleted}
                        data={fileTypeData}
                        fontSize={"1.5rem"}
                        isError={formErrors.fileTypeError === null ? false : true}
                    />
                    
                </div>
                <CustomButtonWithOpacity buttonText={"COMPOSE"} fontSize={"2rem"} onClickAction={handleComposeButtonClick}/>
            </div>
        </>
    )
}