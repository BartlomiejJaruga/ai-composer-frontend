import styles from "./CustomSelectWithOpacity.module.scss";


export default function CustomSelectWithOpacity({ 
    buttonText,
    fontSize, 
    onClickAction,
}) {

    return (
        <div className={styles.select_container}>
            <select style={{ fontSize: fontSize }}>
                <option value="" disabled selected>Wybierz</option>
                <option value="1">Opcja 1</option>
                <option value="2">Opcja 2</option>
            </select>
        </div>
    );
}