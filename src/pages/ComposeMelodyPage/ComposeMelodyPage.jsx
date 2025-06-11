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


    return (
        <>
            <div className={styles.compose_melody_page_container}>
                <h1>Compose Your Melody</h1>
                <CustomSelectWithOpacity fontSize={"2.5rem"}/>
                <CustomSlider />
                <CustomButtonWithOpacity buttonText={"COMPOSE"} fontSize={"2.5rem"} onClickAction={handleComposeButtonClick}/>
            </div>
        </>
    )
}