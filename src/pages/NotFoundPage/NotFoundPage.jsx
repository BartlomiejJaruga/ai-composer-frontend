import styles from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
    return (
        <>
            <div className={styles.not_found_page_container}>
                <h1>Error 404 - page not found!</h1>
            </div>
        </>
    )
}