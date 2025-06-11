import styles from "./CustomButtonWithOpacity.module.scss";


export default function CustomButtonWithOpacity({ 
    buttonText,
    fontSize, 
    onClickAction,
}) {

    return (
        <div className={styles.button_container}>
            <button onClick={onClickAction} style={{ fontSize: fontSize }}>{buttonText}</button>
        </div>
    );
}