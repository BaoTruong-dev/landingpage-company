
import { API } from "../constant/api";


const servicePosts = {
    getPostsData(payload) {
        return fetch(`${API}/category/details`).then(res => res.json());

    }
};

export default servicePosts;