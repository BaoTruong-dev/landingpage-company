import { API } from "../constant/api";

const serviceInfo = {
    getInfo() {
        return fetch(`${API}/information`).then(res => res.json());
    }
};

export default serviceInfo;