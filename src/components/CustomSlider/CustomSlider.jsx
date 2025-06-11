import styles from "./CustomSlider.module.scss";


export default function CustomSlider({ 
    buttonText,
    fontSize, 
    onClickAction,
}) {

    return (
        <div className={styles.slider_container}>
            <input type="range" min={0} max={100} value={0} step={1}/>
        </div>
    );
}