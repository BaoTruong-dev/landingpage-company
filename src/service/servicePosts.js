// import { API } from '../constant/api';
import { API_Posts } from '../constant/api';



const servicePosts = {
    getPostsData(id) {
        return fetch(API_Posts).then(res => res.json());
        // return fetch(API).then(res => res.json());
    }
};

export default servicePosts;