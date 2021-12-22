import Businesslist from "../components/businesslist/Businesslist";
import Header from "../components/header/header";
import axios from "axios";
export async function getServerSideProps() {
    // Fetch data from external API
    const businesses = await axios.get(' https://api.yelp.com/v3/businesses/search',
        {
            params:{
                location:"Naperville,IL, US"
            },
            headers: {
                Authorization: `Bearer M4HMGOWWUjjWf2qul6j4IHeOiZ3SNXM-Hx4ig0npC1ZfFy-0Hgr6yasQ36YKEvkkt9jnVTtF7YWDBUDO-JP7uPn87uzt3N-aCi2Db5ZvTKzqiaSt6EiEoQR49MXCYXYx`,
            }
        });
    console.log(businesses.data.businesses)
    const businesslist = businesses.data.businesses;
    return { props: {businesslist} }
}
export default function Home({businesslist}){
  return (
      <div>
          <Header />
          <Businesslist businesses={businesslist}/>
      </div>
  )
}