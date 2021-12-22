
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, {useState} from "react";
import styles from "../business/Business.module.css";

const Business = ({businessbyid}) => {
    const [business, setbusiness] = useState(businessbyid);
    let [error, seterror] = useState("");
    if(business)
    {
        return (
            <div className={styles.business}>
                <div className={styles.businesscontainer}>
                    <img className={styles.imagecontainer} src={business.image_url} alt={"image_url"}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.businessfeedback}>
                            <div className={styles.dashboardfeedbackscore}>
                                <div
                                    className={0 < business.rating ? styles.clicked : styles.notclicked}>
                                    <i className="fas fa-star"/>
                                </div>
                                <div
                                    className={1 < business.rating ? styles.clicked : styles.notclicked}>
                                    <i className="fas fa-star"/>
                                </div>
                                <div
                                    className={2 < business.rating? styles.clicked : styles.notclicked}>
                                    <i className="fas fa-star"/>
                                </div>
                                <div
                                    className={3 < business.rating ? styles.clicked : styles.notclicked}>
                                    <i className="fas fa-star"/>
                                </div>
                                <div
                                    className={4 < business.rating? styles.clicked : styles.notclicked}>
                                    <i className="fas fa-star"/>
                                </div>
                                <div className={styles.businessrating}>
                                    <span>{business.rating}/5</span>
                                </div>
                                <div className={styles.businesstotalreviews}>
                                    <span>{business.review_count} reviews </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.businessinfo}>
                            <div className={styles.businessname}>
                                {business.name} {business.price}
                            </div>
                            <div className={styles.businesscategories}>
                                {business.categories.length > 1 ?
                                    <div>
                                        {business.categories.map((item,index) => (
                                            <span key={item.title}>{item.title}, </span>
                                        ))} and etc.
                                    </div>
                                    :
                                    <span>{business.categories[0].title}</span>}

                            </div>
                            <div className={styles.businessphone}>
                                {business.display_phone}
                            </div>
                            <div className={styles.businessaddress}>
                            {business.location.display_address.map((item) => (
                                <div key={item}>{item}</div>
                                )
                            )}
                            </div>
                            <div className={styles.businessurlcontainer}>
                                <a className={styles.businessurl} href={business.url}> Check this business out on Yelp</a>
                            </div>
                            <div className={styles.businessstatus}>
                                {business.is_closed ? <span className={styles.businessclosed}> Closed</span>: <span className={styles.businessopen}>Open</span>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else
    {
        return (
            <div className={styles.business}>
                <div className={styles.error}><span>Too many requests</span></div>
            </div>
        );
    }
}
export default Business;