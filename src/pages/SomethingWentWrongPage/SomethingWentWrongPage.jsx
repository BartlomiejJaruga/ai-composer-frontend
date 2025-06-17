import styles from "./SomethingWentWrongPage.module.scss";

import hamster_image from '@images/hamster_in_hamster_wheel.png';
import Arrow from '@icons/arrow.svg?react';
import { useNavigate } from "react-router-dom";

export default function SomethingWentWrongPage() {
    const navigate = useNavigate();

    const handleGoBackToSettings = () => {
        navigate('/composeMelody');
    }

    return (
        <>
            <div className={styles.something_went_wrong_page_container}>
                <h1>Something went wrong when generated melody!</h1>
                <div>
                    <img src={hamster_image} alt="Hamster image working on our server..." />
                    <h2>
                        Our little music hamsters are trying hard to fix the problem...<br/> 
                        please try again later!
                    </h2>
                </div>
                <div className={styles.go_back_button_container} onClick={handleGoBackToSettings}>
                    <Arrow className={styles.arrow_icon}/>
                    <span>Go back to settings</span>
                </div>
            </div>
        </>
    )
}