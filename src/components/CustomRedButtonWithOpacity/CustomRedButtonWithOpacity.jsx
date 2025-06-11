import styles from "./CustomRedButtonWithOpacity.module.scss";


export default function CustomRedButtonWithOpacity({ 
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