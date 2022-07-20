import { API } from '../api/api';

const serviceService = {
    getService() {
        return fetch(API).then(res => res.json());
    }
};

export default serviceService;