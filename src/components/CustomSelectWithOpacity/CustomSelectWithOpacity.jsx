import styles from "./CustomSelectWithOpacity.module.scss";

import { useId } from "react";

export default function CustomSelectWithOpacity({ 
    labelText,
    defaultOptionText,
    selectorName,
    fontSize, 
    onChangeHandler,
    onBlurHandler,
    data,
    isError,
}) {

    const uniqueId = useId();

    return (
        <div className={styles.container} style={{ fontSize: fontSize }}>
            <label htmlFor={uniqueId}>{labelText}</label>
            <div className={styles.select_container}>
                <select 
                    id={uniqueId} 
                    name={selectorName} 
                    defaultValue={defaultOptionText}
                    onChange={onChangeHandler} 
                    onBlur={onBlurHandler}
                    style={{ fontSize: fontSize }}
                    className={!isError ? styles.select_default_style : styles.select_error_style}
                >
                    <option value={defaultOptionText} disabled>{defaultOptionText}</option>
                    {data.map((dataPiece) => {
                        return (
                            <option key={dataPiece} value={dataPiece}>
                                {dataPiece}
                            </option>
                        );
                    })}
                </select>
                <span className={styles.custom_arrow} />
            </div>
        </div>
    );
}