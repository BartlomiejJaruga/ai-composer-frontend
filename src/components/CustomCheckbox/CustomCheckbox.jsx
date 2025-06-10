import styles from "./CustomCheckbox.module.scss";

import { useId } from "react";

export default function CustomCheckbox({ inputName, labelText, fontSize, onClickAction }) {
    const customCheckboxId = useId();

    return (
        <div className={styles.checkbox_container}>
            <input type="checkbox" name={inputName} id={customCheckboxId} onClick={onClickAction}/>
            <label htmlFor={customCheckboxId} style={{ fontSize: fontSize }}>{labelText}</label>
        </div>
    );
}