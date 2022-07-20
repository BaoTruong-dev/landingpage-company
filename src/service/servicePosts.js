import { API_Posts} from '../constant/api';

const servicePosts = {
    getPostsData() {
        return fetch(API_Posts).then(res => res.json());
        // return fetch(API).then(res => res.json());
    }
};

export default servicePosts;