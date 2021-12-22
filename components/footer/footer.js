import styles from "./footer.module.css";
function Footer() {
    return(
        <div className={styles.footercontainer}>
            <div className={styles.footer}>
                <span>Copyright @2021 All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;