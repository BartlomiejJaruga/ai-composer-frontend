import styles from "./LoadingIndicator.module.scss";

export default function LoadingIndicator({ message, fontSize }) {
    return (
        <div className={styles.loading_container} style={{ fontSize: fontSize }}>
            <div className={styles.spinner} />
            <p>{message}</p>
        </div>
    );
}