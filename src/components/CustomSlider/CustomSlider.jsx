import styles from "./CustomSlider.module.scss";

import { useId } from "react";

export default function CustomSlider({ 
    labelText,
    sliderName,
    minText,
    maxText,
    minValue,
    maxValue,
    value,
    stepValue,
    fontSize, 
    onChangeAction,
}) {
    const uniqueId = useId();

    return (
        <div className={styles.slider_container} style={{ fontSize: fontSize }}>
            <label htmlFor={`${uniqueId}_input`}>{labelText}</label>
            <div className={styles.slider_range_labels_container}>
                <span>{minText}</span>
                <span>{maxText}</span>
            </div>
            <input 
                type="range" 
                id={`${uniqueId}_input`} 
                name={sliderName} 
                min={minValue} 
                max={maxValue} 
                value={value} 
                step={stepValue}
                onChange={onChangeAction}
            />
        </div>
    );
}