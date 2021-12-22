import axios from 'axios';

export default class services {
    static async getbusinessbyname(term) {
        try {
            //get business by name
            console.log(term)
            let response = await axios.get(`http://localhost:4000/getbusiness`,
                {
                    params:{
                        term: term.name
                    }
                })
                .catch((error) => {
                    return error.message
                })
            console.log(response.data)
            return response.data
        } catch (e) {
            return "error retrieving businesses"
        }
    }
}