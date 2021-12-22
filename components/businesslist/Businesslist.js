import Link from "next/link";
import React, {useEffect, useState} from "react";
import services from "../../services/services";
import styles from "./Businesslist.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
const Businesslist = ({businesses}) => {
    const [businesslist, setbusinesslist] = useState(businesses);
    const [loadingData, setLoadingData] = useState(false);
    let [name, setNameValue] = useState("");
    let [error, seterror] = useState("");
    let [message, setmessage] = useState("");
    const handleChange = (e) => {
        console.log(e.target.value);
        setNameValue(e.target.value);
        name = e.target.value;
    }
    function onClick()
    {
        getbusiness();
    }
    useEffect(() => {
        if (loadingData) {
            // if the result is not ready so you make the axios call
            setLoadingData(false)
        }
    }, [loadingData]);
    async function getbusiness()
    {
        let response = await services.getbusinessbyname({name});
        console.log(response)
        if(response !== "error retrieving businesses" && response.name!=="Error" && response !==[] && response.length !== 0)
        {
            setbusinesslist(response);
            setmessage("");
            seterror("");
            setLoadingData(true);
        }
        else if(response.length ===0 || response === [])
        {
            setbusinesslist([]);
            setmessage("This business could not be found")
            setLoadingData(true);
        }

        else
        {
            setbusinesslist([]);
            seterror(response.message)
            setLoadingData(true);
        }
    }
    const allbusinesses = businesslist.map(item => (
        <div key={item.id}>
            <Link href={"business/"+item.id}>
                <div className={styles.businesscontainer}>
                    <img className={styles.imagecontainer} src={item.image_url} alt={"image_url"}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.businessfeedback}>
                        <div className={styles.dashboardfeedbackscore}>
                            <div
                                className={0 < item.rating ? styles.clicked : styles.notclicked}>
                                <i className="fas fa-star"/>
                            </div>
                            <div
                                className={1 < item.rating ? styles.clicked : styles.notclicked}>
                                <i className="fas fa-star"/>
                            </div>
                            <div
                                className={2 < item.rating? styles.clicked : styles.notclicked}>
                                <i className="fas fa-star"/>
                            </div>
                            <div
                                className={3 < item.rating ? styles.clicked : styles.notclicked}>
                                <i className="fas fa-star"/>
                            </div>
                            <div
                                className={4 < item.rating? styles.clicked : styles.notclicked}>
                                <i className="fas fa-star"/>
                            </div>
                            <div className={styles.businessrating}>
                                <span>{item.rating}/5</span>
                            </div>
                            <div className={styles.businesstotalreviews}>
                                <span>{item.review_count} reviews </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.businessinfo}>
                        <div className={styles.businessname}>
                            {item.name} {item.price}
                        </div>
                        <div className={styles.businesscategories}>
                            {item.categories.length > 1 ?
                                <div>
                                    {item.categories.map((item,index) => (
                                        <span key={item.title}>{item.title}, </span>
                                    ))} and etc.
                                </div>
                            :
                            <span>{item.categories[0].title}</span>}

                        </div>
                        <div className={styles.businessstatus}>
                            {item.is_closed ? <span className={styles.businessclosed}> Closed</span>: <span className={styles.businessopen}>Open</span>}
                        </div>

                    </div>
                </div>
                </div>
            </Link>
        </div>
    ))
        return (
            <div className={styles.businesslist}>
                <div className={styles.businesslisttitle}><h1 className={styles.businesslisttitle}>SEARCH FOR BUSINESSES IN NAPERVILLE</h1></div>
                <div className={styles.businesslistsearch}>
                    <input className={styles.businesslistsearchinput} type="text" placeholder="Search for business by name" onChange={handleChange} value={name}/>
                    <button className={styles.businesslistsearchbutton} onClick={onClick}>Search</button>
                </div>
                <div>
                    {allbusinesses}
                    <div className={styles.error}>{error==="" ? "" : <span>Too many requests</span>}</div>
                    <div className={styles.message}>{message==="" ? "" : <span>{message}</span>}</div>
                </div>
            </div>
        );
}
export default Businesslist;