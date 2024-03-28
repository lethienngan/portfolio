import styles from "./Popup.module.css";
function Popup({ children, closeModal }) {
    return (
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Popup;
