
import axios from "axios";
import Business from "../../components/business/Business";
import Header from "../../components/header/header";
export async function getServerSideProps(ctx) {
    // Fetch data from external API
    const { id } = ctx.query;
    const businessbyid = await axios.get(`https://api.yelp.com/v3/businesses/${id}`,
        {
            headers: {
                Authorization: `Bearer M4HMGOWWUjjWf2qul6j4IHeOiZ3SNXM-Hx4ig0npC1ZfFy-0Hgr6yasQ36YKEvkkt9jnVTtF7YWDBUDO-JP7uPn87uzt3N-aCi2Db5ZvTKzqiaSt6EiEoQR49MXCYXYx`,
            }
        });
    const business = businessbyid.data;
    return { props: {business} }
}
export default function Businessbyid({business})
{
    return (
        <div>
            <Header />
            <Business businessbyid={business}/>
        </div>
    )
}